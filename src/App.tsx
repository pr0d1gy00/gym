import { RouterProvider } from "react-router-dom"
import { useGymStore } from "./store/store"
import { router } from "./router/router"

function App() {
  const {modal}=useGymStore()
  console.log(modal)
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      
    </>
  )
}

export default App
