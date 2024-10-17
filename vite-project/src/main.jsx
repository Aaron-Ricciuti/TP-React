import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cajonde12Container from './components/Cajonde12Container.jsx';

const routes = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/Cajonde12",
    element: <Cajonde12Container />,
  }, 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
