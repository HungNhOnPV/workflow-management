import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { ThemeProvider } from '@material-ui/styles';
import TaskBoard  from '../Taskboard/index';
import theme from '../../commons/theme';

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
