import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Main from './Layout/main';
import Friends from './Components/Friends/Friends';

function App() {
  const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>, 
    children: 
    [
      {path:'/home',element:<Home></Home>},
      {path:'/Products',element:<Products></Products>},
      {
        path:'/friends',
        loader:async ()=>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        element:<Friends></Friends>}
    ]
  },
    
    {path:'/about',element:<About></About>},
    {path:'*',element:<div>This route not found:404</div>}
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
