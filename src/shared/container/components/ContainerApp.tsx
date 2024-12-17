import Header from '../../header/components/Header'
import '../../../index.css'
import { Outlet } from 'react-router'
import { useGymStore } from '../../../store/store'
import ButtonAddRoutine from '../../buttons/components/ButtonAddRoutine'
import ModalAddRoutine from '../../../features/routines/components/ModalAddRoutine'
export default function ContainerApp() {
	const {modal}=useGymStore()
	return (
		<div>
			<Header/>	
			<section className="containerLayout">
				<Outlet/>
				{!modal && <ButtonAddRoutine/>}
				{modal && <ModalAddRoutine/>}
			</section>
		</div>
	)
}
