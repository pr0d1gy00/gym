import styles from '../styles/Forum.module.css'
import Post from './Post'
import PerfilIcon from '../../../assets/istockphoto-1495088043-612x612.webp'
import FIltersPost from './FIltersPost'
export default function Forum() {
	return (
		<section className={styles.container}> 
			<h2>Comparte tus experiencias y ayuda a los demás en su vida <span>fitness</span></h2>
			<FIltersPost/>
			<section className={styles.postList}>
				<Post title={'COmo puedo mejorar en mi ejercicio'} image={PerfilIcon} preview={'Llevo tiempo intentando mejorar en este ejercicio para conseguir ganas pero no lo logro '} user={'manquito3'} reply={'6'} />
				<Post title={'COmo puedo mejorar en mi ejercicio'} image={PerfilIcon} preview={'Llevo tiempo intentando mejorar en este ejercicio para conseguir ganas pero no lo logro '} user={'manquito3'} reply={'6'} />
			</section>

		</section>
	)
}
