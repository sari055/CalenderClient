import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './views/sign-in/login';
import Register from './views/sign-in/register';
import PageNotFound from './components/page_not_found';
import PrivateRoute from './components/private-route';
import HomePage from './views/home/home-page';
import FamilySettings from './views/family-settings/family-settings';
import About from './views/about/about';
import Calendar from './views/calendar/calendar';

const router = createBrowserRouter([
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