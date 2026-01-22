import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './component/Layouts/Layout';
import About from './component/About/About';
import Portfilo from './component/Portfilo/Portfilo';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';

function App() {



let x = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfilo', element: <Portfilo /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
  {
    basename: "/react_assign"
  }
);





  

  return (
    <>
   <RouterProvider router={x}> </RouterProvider>
         
         </>
  )
}

export default App
