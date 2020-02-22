import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../../components/Dashboard';
import styles from './styles';

class AdminLayoutRouter extends Component {
  render() {
    const { router } = this.props;
    const { component: YourComponent, ...remainProps } = router;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            <Dashboard {...remainProps}>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}

AdminLayoutRouter.propTypes = {
  router: PropTypes.object,
};

export default withStyles(styles)(AdminLayoutRouter);
