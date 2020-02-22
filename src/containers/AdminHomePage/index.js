import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class AdminHomePage extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
      </div>
    );
  }
}

export default withStyles(styles)(AdminHomePage);
