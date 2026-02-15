import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Solutions from './Pages/Solutions'
import Technology from './Pages/Technology'
import UseCases from './Pages/UseCases'
import GetStarted from './Pages/GetStarted'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsConditions from './Pages/TermsConditions'

const App = () => {
  const router= createBrowserRouter([
    {
    path: '/',
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/solutions',
        element: <Solutions/>
      },
      {
        path:'/technology',
        element: <Technology/>
      },
      {
        path:'/use-cases',
        element: <UseCases/>
      },
      {
        path:'/privacy-policy',
        element: <PrivacyPolicy/>
      },
      {
        path:'/terms-conditions',
        element: <TermsConditions/>
      },
    ]
    }

  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App