import { TextField, withStyles, Modal, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

class TaskForm extends Component {
  render() {
    const { classes, open, handleClose } = this.props;
    return (
      <Modal open={open} onClose={handleClose}>
        <div className={classes.modal}>
          <form>
            <Grid container>
              <Grid item md={12}>
                <TextField
                  id="standard-name"
                  label="Title"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  id="standard-name"
                  label="Describe"
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
              <Grid item md={12}>
                <Box display="flex" flexDirection="row-reverse" mt={2}>
                  <Box ml={1}>
                    <Button
                      variant="contained"
                      color="default"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </Box>
                  <Button variant="contained" color="primary">
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  handleClose: PropTypes.func,
}

export default withStyles(styles)(TaskForm);
