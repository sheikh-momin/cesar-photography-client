import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import PageNotFound from '../../Pages/404/404';
import Home from '../../Pages/Home/Home/Home';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '*',
        element: <PageNotFound></PageNotFound>
      },
    ]
  },
]);


export default router;