import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cajonde12 from './components/Cajonde12.jsx';


//Escribimos en objetos el pat y el element a utilizar

const routes = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/Cajonde12",
    element: <Cajonde12 />,
  }, 
  

]);

//El RouterProvider maneja el listado de rutas
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
