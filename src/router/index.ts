import { createBrowserRouter } from 'react-router';
import Home from '../views/Home';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
]);

export default router;
