import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Resister from './component/Resister';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
        ,
        {
          path:'home',
          element:<Home></Home>
        }
        ,
        {
          path:'resister',
          element:<Resister></Resister>
        }
        ,
        {
          path:'login',
          element: <Login></Login>
        }
        ,
      ]
    }
  ])
  return (
    <div className="App">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
