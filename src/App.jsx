import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
