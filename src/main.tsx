import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {route} from "./Routes/routes.tsx";
import {ThemeProvider} from "./Utils/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider>
          <RouterProvider router={route} />
      </ThemeProvider>
  </React.StrictMode>,
)
