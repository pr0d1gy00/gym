import { ReactNode } from 'react'
import styles from '../styles/Modal.module.css'
import CloseIcon from '../../../assets/close.webp'
import { useGymStore } from '../../../store/store'
export default function Modal({children}:{children:ReactNode}) {
	const {showModal}=useGymStore()
	return (
		<section className={styles.container} >
				
				<div className={styles.bodyModal}>
					<div className={styles.containerButtonClose}>
						<button title='close' className={styles.buttonClose} onClick={()=>showModal()}>
							<img src={CloseIcon} alt="close" />
						</button>
					</div>
					{children}

				</div>
		</section>
	)
}
