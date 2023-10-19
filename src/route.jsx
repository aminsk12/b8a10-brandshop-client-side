import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./Component/Pages/Error/Error";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Register from "./Component/Pages/Login/Register";
import AddProduct from "./Component/Pages/AddProduct/AddProduct";
import Service from "./Component/Pages/Service/Service";
import Update from "./Component/Pages/Service/Update";





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
                path: '/service/:brand',
                element: <Service></Service>,
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
              element: <AddProduct></AddProduct>
            },
            {
              path: '/update/service/:id',
              element: <Update></Update> ,
              loader: ({params})=> fetch(`http://localhost:5000/item/${params.id}`)
            }

        ]
    },
]);
export default route;