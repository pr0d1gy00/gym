import Header from '../../header/components/Header'
import '../../../index.css'
import { Outlet } from 'react-router'

export default function ContainerApp() {
	return (
		<div>
			<Header/>	
			<section className="containerLayout">
				<Outlet/>
				
			</section>
		</div>
	)
}
