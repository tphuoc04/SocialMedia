import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate 
} from "react-router-dom";

 import { Home, Login, Register, Layout } from './pages';

function App() {
  // Get user token
  let userToken = true;

  // Authenticate Route
  const authenticate = (children : any) => {
    if (userToken) {
      return children;
    }
    <Navigate to="/login" />
  }

  // Create route config
  const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <Home /> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
