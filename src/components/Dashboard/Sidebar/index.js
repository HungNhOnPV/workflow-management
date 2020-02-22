import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';

class Sidebar extends Component {
  render() {
    return (
      <p>Sidebar</p>
    );
  }
}

export default withStyles(styles)(Sidebar);
