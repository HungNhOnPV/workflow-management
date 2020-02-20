import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../../commons/theme';
import GlobalLoading from '../../components/GlobalLoading';
import CommonModal from '../../components/CommonModal';
import TaskBoard from '../Taskboard/index';
import styles from './styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalLoading />
        <CommonModal />
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
