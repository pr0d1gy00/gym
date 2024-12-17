import styles from '../styles/Button.module.css'
import AddIcon from '../../../assets/agregar.png'
import { useGymStore } from '../../../store/store'
export default function ButtonAddRoutine() {
	const {showModal}=useGymStore()
	return (
		<button className={styles.buttonAddRoutine} onClick={()=>showModal()}>
			<img src={AddIcon} alt="addRoutine" />
		</button>
	)
}
