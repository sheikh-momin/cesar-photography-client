import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div data-theme="dracula" className='max-w-screen-2xl m-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
