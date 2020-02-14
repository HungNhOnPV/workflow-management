import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem';

class TaskList extends Component {
    render() {
        const { classes, status, tasks } = this.props;
        return (
            <Grid item md={4} xm={12}>
                <Box mt={2} mb={2}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {
                        tasks.map(task => {
                            return <TaskItem 
                                        task={task} 
                                        status={status} 
                                        key={task.id}
                                    />
                        })
                    }
                </div>
            </Grid>
        );
    }
}

export default withStyles(styles)(TaskList);
