import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './Components/About.jsx'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import ProductPage from './Components/ProductPage.jsx'
import Product from './Components/Product.jsx'
import SignIn from './Components/SignIn.jsx'
import SignUp from './Components/SignUp.jsx'

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
        path:"/product",
        element:<Product/>
      },
      {
        path:"/ProductPage/:id",
        element:<ProductPage/>
      }
    ]
  },
  {
    path:"signin",
    element:<SignIn/>
  },
  {
    path:"signup",
    element:<SignUp/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
