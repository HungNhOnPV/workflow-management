import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import theme from '../../commons/theme';
import TaskBoard from '../Taskboard/index';
import styles from './styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
