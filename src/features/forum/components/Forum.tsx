import styles from '../styles/Forum.module.css'
import Post from './Post'
import PerfilIcon from '../../../assets/istockphoto-1495088043-612x612.webp'
import FiltersPost from './FiltersPost'
import { useGymStore } from '../../../store/store'
import ButtonAdd from '../../../shared/buttons/components/ButtonAdd'
import ModalAddRoutine from '../../routines/components/ModalAddRoutine'
export default function Forum() {
	const {modal}=useGymStore()
	return (
		<section className={styles.container}>
			{!modal && <ButtonAdd/>}
			{modal && <ModalAddRoutine/>} 
			<h2>Comparte tus experiencias y ayuda a los demás en su vida <span>fitness</span></h2>
			<FiltersPost/>
			<section className={styles.postList}>
				<Post title={'COmo puedo mejorar en mi ejercicio'} image={PerfilIcon} preview={'Llevo tiempo intentando mejorar en este ejercicio para conseguir ganas pero no lo logro '} user={'manquito3'} reply={'6'} />
				<Post title={'COmo puedo mejorar en mi ejercicio'} image={PerfilIcon} preview={'Llevo tiempo intentando mejorar en este ejercicio para conseguir ganas pero no lo logro '} user={'manquito3'} reply={'6'} />
			</section>

		</section>
	)
}
