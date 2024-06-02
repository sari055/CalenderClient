import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './views/sign-in/login';
import Register from './views/sign-in/register';
import PageNotFound from './components/page_not_found';
import PrivateRoute from './components/private-route';
import HomePage from './views/home/home-page';
import FamilySettings from './views/family-settings/family-settings';
import About from './views/about/about';
import Calendar from './views/calendar/calendar';
import ForgotPasswordForm from './views/sign-in/forgot-password-form';
import AddUser from './views/family-settings/add-user';
import AddEvent from './views/family-settings/add-event';
const router = createBrowserRouter([
  {
    path:'/add-event',
    element:<AddEvent/>
  },
  {
    path:'/add-user',
    element:<AddUser/>
  },
  {
    path:'/forgot-password-form',
    element:<ForgotPasswordForm/>
  },
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/home',
    element: <PrivateRoute Component={HomePage} />,
    children: [
      {
        path: 'calendar',
        element: <Calendar/>
      },
      {
        path: 'family/settings',
        element: <FamilySettings />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);
export default router;