import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';

class SignupPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.signup}>
          <Card>
            <CardContent>
              <div className="text-xs-center pb-xs">
                <Typography variant="caption">Register</Typography>
              </div>
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                label="Password"
                className={classes.textField}
                type="password"
                fullWidth
                margin="normal"
              />
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                className={classes.textField}
                type="password"
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                control={<Checkbox value="agree" />}
                label="I agree"
                className={classes.fullWidth}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Signup
              </Button>
              <div className="pt-8 text-md-center">
                <Link to="/login">
                  <Button>Login</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(SignupPage);
