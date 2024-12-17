import LoginForm from "./features/login/components/LoginForm"
import RegisterForm from "./features/register/components/RegisterForm"
import ModalAddRoutine from "./features/routines/components/ModalAddRoutine"
import ButtonAddRoutine from "./shared/buttons/components/ButtonAddRoutine"
import Header from "./shared/header/components/Header"
import Modal from "./shared/modal/components/Modal"
import { useGymStore } from "./store/store"

function App() {
  const {modal}=useGymStore()
  console.log(modal)
  return (
    <>
      <Header/>
      <LoginForm/>
      {!modal &&
        <ButtonAddRoutine/>
      }
      {modal ?  
        <ModalAddRoutine/>
      : null}
    </>
  )
}

export default App
