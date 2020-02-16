import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import theme from '../../commons/theme';
import TaskBoard from '../Taskboard/index';
import styles from './styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
