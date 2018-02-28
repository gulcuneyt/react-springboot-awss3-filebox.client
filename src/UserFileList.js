import React, { Component } from "react";
import UserFile from "./UserFile.js";
import DropFile from "./DropFile.js";
import axios from "axios";

class UserFileList extends Component {
  constructor(props) {
    super(props);
    this.state = { userCode: "", files: [], newFile: false };

    this.handleNewFileClick = this.handleNewFileClick.bind(this);
    this.loadFiles = this.loadFiles.bind(this);
  }

  loadFiles() {
    axios
      .get("http://localhost:8080/users/" + this.props.usercode + "/files/")
      .then(responseJson => {
        this.setState({ files: responseJson.data });
      });
  }

  handleNewFileClick() {
    this.setState({ newFile: !this.state.newFile });
  }

  componentWillReceiveProps(newProps) {
    axios
      .get("http://localhost:8080/users/" + newProps.usercode + "/files/")
      .then(responseJson => {
        this.setState({ files: responseJson.data });
      });
  }
  getInitialState() {
    return { userCode: "" };
  }

  componentDidMount() {
    this.loadFiles();
  }

  render() {
    var rows = [];
    var self = this;
    this.state.files.forEach(function(file) {
      rows.push(
        <UserFile
          file={file}
          key={file.fileName}
          parentLoadFiles={self.loadFiles}
          usercode={self.state.userCode}
        />
      );
    });

    return (
      <div>
        <h1>Files ({this.props.usercode})</h1>
        <button className="btn btn-primary" onClick={this.handleNewFileClick}>
          Add File
        </button>

        <table className="table table-striped">
          {this.state.newFile && (
            <DropFile
              usercode={this.props.usercode}
              parentLoadFiles={this.loadFiles}
            />
          )}
        </table>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Filename</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default UserFileList;
