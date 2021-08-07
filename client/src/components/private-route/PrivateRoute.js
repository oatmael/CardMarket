import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as Constants from "../../constants";
import Error403 from "../errors/Error403";

const PrivateRoute = ({ component: Component, auth, roles, ...rest }) => {
  if (!auth.isAuthenticated) {
    return <Route {...rest} render={(props) => <Redirect to="/login" />} />;
  }

  console.log(roles || [Constants.ROLES.ANY]);
  console.log([auth.user.role, Constants.ROLES.ANY]);
  if (roles) {
    if (
      ![auth.user.role, Constants.ROLES.ANY].some((el) =>
        (roles || [Constants.ROLES.ANY]).includes(el)
      )
    ) {
      return <Route {...rest} render={(props) => <Error403 />} />;
    }
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  roles: PropTypes.array,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
