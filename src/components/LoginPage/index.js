import { Button, TextField, withStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.background}>
        <div className={classes.login}>
          <Card>
            <CardContent>
              <div className="text-xs-center pb-xs">
                <Typography variant="caption">Sign in to continue</Typography>
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
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Login
              </Button>
              <div className="pt-8 text-md-center">
                <Link to="/signup">
                  <Button>Signup</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(LoginPage);
