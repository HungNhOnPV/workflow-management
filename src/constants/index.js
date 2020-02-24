import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';
import AdminHomePage from '../containers/AdminHomePage';
import Taskboard from '../containers/Taskboard';

export const API_ENDPOINT = 'http://localhost:3000';

export const STATUSES = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'IN PROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETED',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    path: '/admin',
    name: 'Page admin',
    exact: true,
    component: AdminHomePage,
  },
  {
    path: '/admin/task-board',
    name: 'Workflow management',
    exact: true,
    component: Taskboard,
  },
];

export const ROUTES = [
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'Signup',
    exact: true,
    component: SignupPage,
  },
];
