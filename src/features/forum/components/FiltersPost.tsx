import { ReactNode } from 'react'
import styles from '../styles/Forum.module.css'

export default function FiltersPost({children}:{children:ReactNode}) {

	return (
		<div className={styles.filterPostContainer}>
			<h3>Filtra aqui los post que quieres ver!</h3>
			<div className={styles.buttonActions}>
				{children}
			</div>
			

		</div>
	)
}
