import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants/index';
import TaskList from '../../components/TaskList';
import TaskItem from '../../components/TaskForm';

const listTask = [
    {
        id: 1,
        title: 'Read book',
        description: 'Read material ui book',
        status: 0
    },
    {
        id: 2,
        title: 'Play football',
        description: 'With my friend',
        status: 2
    },
    {
        id: 3,
        title: 'Play game',
        description: '',
        status: 1
    }
]

class TaskBoard extends Component {

    state = {
        open: false
    }

    renderBoard = () => {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value); 
                        return <TaskList 
                                tasks={taskFiltered} 
                                status={status} 
                                key={index} 
                            />;
                    })
                }
            </Grid>
        )
        return xhtml;
    }

    openForm = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    renderForm = () => {
        const { open } = this.state;
        let xhtml = null;
        xhtml = <TaskItem open={open} handleClose={this.handleClose}/>
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.openForm} >
                    <AddIcon /> Add new job
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);
