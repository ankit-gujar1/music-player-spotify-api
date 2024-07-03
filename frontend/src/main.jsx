import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css'
import Login from './Login.jsx';
import { StateProvider } from './StateProvider';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  // { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);