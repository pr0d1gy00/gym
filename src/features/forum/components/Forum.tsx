import styles from '../styles/Forum.module.css'
import Post from './Post'
import PerfilIcon from '../../../assets/istockphoto-1495088043-612x612.webp'
import FiltersPost from './FiltersPost'
import { useGymStore } from '../../../store/store'
import ButtonAdd from '../../../shared/buttons/components/ButtonAdd'
import ModalAddRoutine from '../../routines/components/ModalAddRoutine'
import { useButtons } from '../../../hooks/useButtons'
import ButtonFIlter from '../../../shared/buttons/components/ButtonFIlter'
export default function Forum() {
	const {modal}=useGymStore()
	const {buttons} = useButtons()
	return (
		<section className={styles.container}>
			{!modal && <ButtonAdd/>}
			{modal && <ModalAddRoutine/>} 
			<h2>Comparte tus experiencias y ayuda a los demás en su vida <span>fitness</span></h2>
			<FiltersPost>
				{buttons.map(button=>
					<ButtonFIlter title={button.title} id={button.id} key={button.id} text={button.text} type={button.type}/>
				)}
			</FiltersPost>
			<section className={styles.postList}>
				<Post title={'COmo puedo mejorar en mi ejercicio'} image={PerfilIcon} preview={'Llevo tiempo intentando mejorar en este ejercicio para conseguir ganas pero no lo logro '} user={'manquito3'} reply={'6'} id={'1'} />
				<Post title={'COmo puedo mejorar en mi ejercicio'} image={PerfilIcon} preview={'Llevo tiempo intentando mejorar en este ejercicio para conseguir ganas pero no lo logro '} user={'manquito3'} reply={'6'} id={'2'} />
			</section>

		</section>
	)
}
