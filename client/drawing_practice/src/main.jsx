import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import PracticePage from './Pages/PracticePage.jsx'
import HomePage from './Pages/HomePage';
import { ImageProvider } from './context/ImageContext.jsx'

// const myrouter = createBrowserRouter([
//   {path:"/", element:<App/>},
//   {path:"/practice", element:<PracticePage/>},
// ]);

const router = createBrowserRouter([{
    path:"/", 
    element:<App/>,
    children: [{
      index: true, element: <HomePage/>
    },
    {
      path:"/practice",
      element:<PracticePage/>
    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageProvider>
      <RouterProvider router={router}/>
    </ImageProvider>
  </StrictMode>,
)

