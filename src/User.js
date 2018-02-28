import React, { Component, Link } from "react";
import axios from "axios";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };

    this.loadUsers = this.loadUsers.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  getInitialState() {
    return {
      display: true
    };
  }

  loadUsers() {
    this.props.parentloadUsers();
  }

  handleUserChange(userKey) {
    this.props.handleParentUserChange(userKey);
  }

  handleDelete(name) {
    var self = this;
    axios
      .delete("http://localhost:8080/users/" + name)
      .then(function(response) {
        self.loadUsers();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.display == false) return null;
    else
      return (
        <tr>
          <td>
            {" "}
            <a
              href="#"
              onClick={() => {
                this.handleUserChange(this.props.user.nameSurname);
              }}
            >
              {" "}
              {this.props.user.nameSurname}{" "}
            </a>
          </td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                this.handleUserChange(this.props.user.nameSurname);
              }}
            >
              {" "}
              Get Files
            </button>
          </td>{" "}
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.handleDelete(this.props.user.nameSurname);
              }}
            >
              {" "}
              Delete User{" "}
            </button>{" "}
          </td>{" "}
        </tr>
      );
  }
}

export default User;
