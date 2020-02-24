import CssBaseLine from '@material-ui/core/CssBaseline';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { BrowserRouter as Routers } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayoutRouter from '../../commons/Layout/AdminLayoutRouter';
import DefaultLayoutRouter from '../../commons/Layout/DefaultLayoutRouter';
import theme from '../../commons/theme';
import CommonModal from '../../components/CommonModal';
import GlobalLoading from '../../components/GlobalLoading';
import { ADMIN_ROUTES, ROUTES } from '../../constants';
import styles from './styles';

class App extends Component {
  renderAdminRouters = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(router => {
      return <AdminLayoutRouter key={router.path} router={router} />;
    });
    return xhtml;
  };

  renderRouters = () => {
    let xhtml = null;
    xhtml = ROUTES.map(router => {
      return <DefaultLayoutRouter key={router.path} router={router} />;
    });
    return xhtml;
  };

  render() {
    return (
      <Routers>
        <ThemeProvider theme={theme}>
          <CssBaseLine />
          <ToastContainer />
          <GlobalLoading />
          <CommonModal />
          {/* <Switch> */}
            {this.renderAdminRouters()}
            {this.renderRouters()}
          {/* </Switch> */}
        </ThemeProvider>
      </Routers>
    );
  }
}

export default withStyles(styles)(App);
