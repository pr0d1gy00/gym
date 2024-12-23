import { useButtons } from '../../../hooks/useButtons'
import ButtonFIlter from '../../../shared/buttons/components/ButtonFIlter'
import styles from '../styles/Forum.module.css'

export default function FiltersPost() {

	const {buttons}=useButtons()


	return (
		<div className={styles.filterPostContainer}>
			<h3>Filtra aqui los post que quieres ver!</h3>
			<div className={styles.buttonActions}>
				{buttons.map(button=>
					<ButtonFIlter title={button.title} id={button.id} text={button.text} type={button.type}/>
				)}
			</div>
			

		</div>
	)
}
