import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import PageNotFound from '../../Pages/404/404';
import AddService from '../../Pages/AddService/AddService';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import LogIn from '../../Pages/LogIn/LogIn';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import Serves from '../../Pages/Serves/Serves';
import SignIn from '../../Pages/SignIn/SignIn';
import ServiceDetails from '../../ServiceDetails/ServiceDetails';
import UserAddedService from '../../UserAddedService/UserAddedService';
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
        element: <Serves></Serves>,
        loader: () => fetch('https://cesar-photography-server.vercel.app/services')
      },
      {
        path: '/serves/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`https://cesar-photography-server.vercel.app/services/${params.id}`)
      },
      {
        path: '/myreview',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path: '/addservice',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/userServices',
        element: <UserAddedService></UserAddedService>,
      },
      {
        path: '*',
        element: <PageNotFound></PageNotFound>
      }
    ]
  },
]);


export default router;