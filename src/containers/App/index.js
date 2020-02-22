import CssBaseLine from '@material-ui/core/CssBaseline';
import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { BrowserRouter as Routers } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayoutRouter from '../../commons/Layout/AdminLayoutRouter';
import theme from '../../commons/theme';
import CommonModal from '../../components/CommonModal';
import GlobalLoading from '../../components/GlobalLoading';
import { ADMIN_ROUTES } from '../../constants';
import styles from './styles';

class App extends Component {
  renderAdminRouters = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(router => {
      return <AdminLayoutRouter key={router.path} router={router} />;
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
          {this.renderAdminRouters()}
        </ThemeProvider>
      </Routers>
    );
  }
}

export default withStyles(styles)(App);
