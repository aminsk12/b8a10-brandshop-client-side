
import * as ReactDOM from "react-dom/client";

import { RouterProvider } from 'react-router-dom'
import './index.css'
import React from "react";
import route from "./route";
import AuthProvider from "./Component/Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </React.StrictMode>,
)
