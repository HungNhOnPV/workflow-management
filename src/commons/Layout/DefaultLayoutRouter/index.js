import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styles from './styles';

class DefaultLayoutRouter extends Component {
  render() {
    const { router } = this.props;
    const { component: YourComponent, ...remainProps } = router;
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return <YourComponent {...routeProps} />;
        }}
      />
    );
  }
}

DefaultLayoutRouter.propTypes = {
  router: PropTypes.object,
};

export default withStyles(styles)(DefaultLayoutRouter);
