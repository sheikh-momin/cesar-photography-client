import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import PageNotFound from '../../Pages/404/404';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import LogIn from '../../Pages/LogIn/LogIn';
import Serves from '../../Pages/Serves/Serves';
import SignIn from '../../Pages/SignIn/SignIn';
import ServiceDetails from '../../ServiceDetails/ServiceDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';





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
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/serves',
        element: <PrivateRoute><Serves></Serves></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/serves/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '*',
        element: <PageNotFound></PageNotFound>
      }
    ]
  },
]);


export default router;