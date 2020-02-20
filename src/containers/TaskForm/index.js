import { Box, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from '../../actions/modal';
import renderTextField from '../../components/FormHelper/TextField';
import styles from './styles';
import validate from './validate';

class TaskForm extends Component {
  handleSubmitForm = data => {
    console.log(data);
  };

  render() {
    const {
      classes,
      modalActionCreators,
      handleSubmit,
      invalid,
      submitting,
    } = this.props;
    const { hideModal } = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Field
            id="title"
            name="title"
            component={renderTextField}
            label="Title"
            className={classes.textField}
            margin="normal"
          />
          <Field
            id="description"
            name="description"
            component={renderTextField}
            label="Description"
            multiline
            rowsMax={4}
            className={classes.textField}
            margin="normal"
          />
          <Grid item md={12}>
            <Box display="flex" flexDirection="row-reverse" mt={2}>
              <Box ml={1}>
                <Button variant="contained" color="default" onClick={hideModal}>
                  Cancel
                </Button>
              </Box>
              <Button
                disabled={invalid || submitting}
                variant="contained"
                color="primary"
                type="submit"
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object,
  modalActionCreators: PropTypes.shape({
    hideModel: PropTypes.func,
  }),
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';

const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(
  withStyles(styles),
  withConnect,
  withReduxForm,
)(TaskForm);
