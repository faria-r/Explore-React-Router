import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Main from './Layout/main';
import Friends from './Components/Friends/Friends';
import FriendDetailes from './Components/FriendDetailes/FriendDetailes';
import Post from './Components/POst/Post';

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
        element:<Friends></Friends>},
        {
          path: '/friend/:friendID',
          loader: async ({params}) => {
          // console.log(params);
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
          },
          element: <FriendDetailes></FriendDetailes>
        },
        {
          path:'/post',
          loader: async() =>{
            return fetch ('https://jsonplaceholder.typicode.com/posts')
          },
          element:<Post></Post>
        }
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
