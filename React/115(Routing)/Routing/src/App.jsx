import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider , useParams } from 'react-router-dom'

function App() {
  // const params= useParams()
  const router= createBrowserRouter([
    {
      path: '/',   //on this path i want to show this component
      element: <Navbar/>
    }
    ,
    { path: '/login', element: <Login/> },
  // {path: '/about/:username', element: <h1>About {params.username}</h1>},
  ])   
  

  return (
    <>
  
      <RouterProvider router={router} />
    </>
  )
}

export default App
//react router hm isliye use krte h jb mujhe kuch content change krna ho and page reload nahi karna ho.
//RouterProvider kya krta h aap jaha pr bhi vo array vale components fit krana chahte ho aap vaha routerprovider lga do
// React Router (react-router-dom) enables client-side routing, allowing navigation between different components without reloading the page.
