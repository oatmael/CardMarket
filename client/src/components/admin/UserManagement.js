import React, { Component } from "react";
import axios from "axios";
import AdminMenu from "../dashboard/AdminMenu";
import { connect } from "react-redux";
import * as Constants from "../../constants";
class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    const token = localStorage.jwtToken;
    axios
      .get("/api/admin/users", {
        headers: { Authorization: token },
      })
      .then((response) => {
        this.setState({ users: response.data });
      });
  }

  componentWillUnmount() {
    this.setState({ users: [] });
  }

  render() {
    return (
      <div className="row mx-5">
        <div className="col-2">
          <AdminMenu />
        </div>
        <div className="col-10">
          <div className="card">
            <div className="card-body">
              <h4>User Management</h4>
              <hr />
              <div className="card">
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Registered</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.users.map((user) => (
                        <tr key={user._id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{Constants.ROLE_STRINGS[user.role]}</td>
                          <td>
                            {new Date(user.date).toLocaleDateString("en-GB")}
                          </td>
                          <td></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(UserManagement);
