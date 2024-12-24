import styles from '../styles/Button.module.css'
import AddIcon from '../../../assets/agregar.png'
import { useGymStore } from '../../../store/store'
export default function ButtonAdd() {
	const {showModal}=useGymStore()
	return (
		<button className={styles.buttonAdd} onClick={()=>showModal()}>
			<img src={AddIcon} alt="add" />
		</button>
	)
}
