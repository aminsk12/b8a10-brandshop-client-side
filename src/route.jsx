import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./Component/Pages/Error/Error";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Register from "./Component/Pages/Login/Register";
import AddProduct from "./Component/Pages/AddProduct/AddProduct";
import Service from "./Component/Pages/Service/Service";
import Update from "./Component/Pages/Service/Update";
import About from "./Component/Pages/About/About";
import PrivateRoute from "./Component/Provider/PrivateRoute";
import Details from "./Component/Pages/Service/Details";





const route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/about',
                element: <About></About>,

            },
            {
                path: '/service/:type',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/item')

            },
            {
              path: '/login',
              element: <Login></Login>
            },
            {
              path: '/register',
              element: <Register></Register>
            },
            {
              path: '/addProduct',
              element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            
            {
              path: '/update/service/:id',
              element: <PrivateRoute><Update></Update></PrivateRoute> ,
              loader: ({params})=> fetch(`http://localhost:5000/item/${params.id}`)
            },



           {
              path: '/details/:id',
              element: <PrivateRoute><Details></Details></PrivateRoute>,
        
            }

        ]
    },
]);
export default route;