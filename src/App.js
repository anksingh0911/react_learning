import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/cart";
import Login from "./components/Login";
import Register from "./components/Register";
const AppLayout = ()=>{
  const [userName,  setUserName] = useState('Ankur Singh');

  return(
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header/>
        <Outlet/>
      </div>
    </UserContext.Provider>
    </Provider>
    
  )
};
const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    children:[
      {
        path: '/',
        element:<Body/>

      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>,
      },
      {
        path:'/cart',
        element:<Cart/>,
      },
      {
        path:'/login',
        element:<Login/>,
      },
      {
        path:'/register',
        element:<Register/>,
      },
    ],
    errorElement:<Error/>
  }
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);