import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Components/About.jsx'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import ProductPage from './Components/ProductPage.jsx'

function App(){
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        path:"/",
        element:<Home />,
        
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/ProductPage/:id",
        element:<ProductPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
