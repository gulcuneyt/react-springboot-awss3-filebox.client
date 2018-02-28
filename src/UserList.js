import React, { Component } from "react";
import User from "./User.js";
import axios from "axios";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCode: "",
      users: [],
      newUser: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNewUserClick = this.handleNewUserClick.bind(this);
    this.loadUsers = this.loadUsers.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(username) {
    this.props.handleParentUserChange(username);
  }

  loadUsers() {
    axios.get("http://localhost:8080/users/").then(responseJson => {
      this.setState({
        users: responseJson.data
      });
    });
  }

  handleNewUserClick() {
    this.setState({
      newUser: !this.state.newUser
    });
  }

  getInitialState() {
    return {
      userCode: ""
    };
  }

  handleChange(event) {
    this.setState({
      userCode: event.target.value
    });
  }

  handleClick() {
    var self = this;
    var person = {
      nameSurname: this.state.userCode
    };
    axios
      .put("http://localhost:8080/users/", person)
      .then(function(response) {
        self.loadUsers();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    var rows = [];
    var self = this;
    this.state.users.forEach(function(user) {
      rows.push(
        <User
          user={user}
          key={user.name}
          parentloadUsers={self.loadUsers}
          handleParentUserChange={self.handleUserChange}
        />
      );
    });

    var newUser = "";
    if (this.state.newUser) {
      newUser = (
        <div class="well form-group float-label-control">
          <label for=""> Username </label>{" "}
          <input
            class="form-control"
            onChange={this.handleChange}
            type="text"
            placeholder="Username"
          />
          <br />
          <button className="btn btn-primary" onClick={this.handleClick}>
            {" "}
            Save
          </button>
        </div>
      );
    } else {
      newUser = "";
    }

    return (
      <div>
        <p>
          <h1> Users </h1>
        </p>
        <p>
          <button className="btn btn-primary" onClick={this.handleNewUserClick}>
            {" "}
            Add New User
          </button>
        </p>
        <table className="table table-striped">{newUser}</table>
        <table className="table table-striped">
          <thead>
            <tr>
              <th class="col-md-4"> Name </th> <th class="col-md-2"> Files </th>
              <th class="col-md-6"> Delete </th>
            </tr>
          </thead>
          <tbody> {rows} </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;
