import React, {
  Component
} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './UserList.js';
import UserFileList from './UserFileList.js';


class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      usercode: '',
    };
    this.handleUserChange = this.handleUserChange.bind(this);

  }

  handleUserChange(user) {
    this.setState({
      usercode: user
    })
  }

  render() {
    var self = this;
    var files = '';
    if (this.state.usercode.length > 0) {
      files = ( < UserFileList usercode = {
          this.state.usercode
        }
        /> );
      }

      return ( <
          div >
          <
          UserList handleParentUserChange = {
            self.handleUserChange
          }
          /> {
          files
        } <
        /div>
    );
  }
}

export default App;
