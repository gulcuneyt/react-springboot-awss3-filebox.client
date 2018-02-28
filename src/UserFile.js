import React, { Component, Link } from "react";
import axios from "axios";
import FileDownload from "react-file-download";


class UserFile extends Component {
  constructor(props) {
    super(props);
    this.state = { display: true };

    this.loadFiles = this.loadFiles.bind(this);
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
  }

  getInitialState() {
    return { display: true };
  }

  loadFiles() {
    this.props.parentLoadFiles();
  }

  handleDeleteClick(name) {
    var self = this;
    axios
      .delete("http://localhost:8080/users/files/?fileId=" + name)
      .then(function(response) {
        self.loadFiles();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleDownloadClick(name) {
    axios
      .get("http://localhost:8080/users/files/?fileId=" + name)
      .then(response => {
        var h = response.headers;
        console.log(h);
        var fname = h['filename'];
        FileDownload(response.data, fname);
      }
        //<MyFrame iframeSrc={response.data} />
      );
  }

  render() {



    if (this.state.display == false) return null;
    else
      return (
        <tr>
          <td>
            <a
              href={() => {
                this.handleDownloadClick(this.props.file.id);
              }}
            >
              {this.props.file.id}
            </a>
          </td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.handleDownloadClick(this.props.file.id);
              }}
            >
              Download File
            </button>
          </td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => {
                this.handleDeleteClick(this.props.file.id);
              }}
            >
              Delete File
            </button>
          </td>
        </tr>
      );
  }
}

export default UserFile;
