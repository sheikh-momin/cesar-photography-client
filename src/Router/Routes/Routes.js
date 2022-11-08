import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import PageNotFound from '../../Pages/404/404';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home/Home';
import LogIn from '../../Pages/LogIn/LogIn';
import SignIn from '../../Pages/SignIn/SignIn';




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
        path: '*',
        element: <PageNotFound></PageNotFound>
      },
    ]
  },
]);


export default router;