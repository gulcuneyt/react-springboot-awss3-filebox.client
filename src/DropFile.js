import React, { Component, Link } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";

class DropFile extends Component {
  constructor() {
    super();
    this.state = { files: [] };

    this.loadFiles = this.loadFiles.bind(this);
  }

  loadFiles() {
    this.props.parentLoadFiles();
  }

  onDrop(files) {
    var data = new FormData();
    files.forEach(file => {
      data.append("file", file);
    });

    this.setState({
      files
    });

    var self = this;
    axios
      .post(
        "http://localhost:8080/users/" + this.props.usercode + "/upload/",
        data
      )
      .then(function(res) {
        self.loadFiles();
      })
      .catch(function(err) {
      });
  }

  render() {
    return (
      <section>
        <br />
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
      </section>
    );
  }
}

export default DropFile;
