import { RouterProvider } from "react-router-dom"
import { useGymStore } from "./store/store"
import { router } from "./router/router"
import { useEffect } from "react"

function App() {
  const {modal}=useGymStore()
  console.log(modal)
  useEffect(()=>{
    navigator.mediaDevices.getUserMedia()
  },[])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}

export default App
