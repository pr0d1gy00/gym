import styles from '../styles/Routines.module.css'
import Modal from '../../../shared/modal/components/Modal'
import { useInputsForm } from '../../../hooks/useInputsForm'
import Input from '../../../shared/input/components/Input'
import ButtonForm from '../../../shared/buttons/components/ButtonForm'

export default function ModalAddRoutine() {
	const {inputsRegisterRoutine}=useInputsForm()

	return (
		<Modal>
				<form action="" className={styles.modalForm}>
					<h2 className={styles.title}>Registra una rutina</h2>
						{
							inputsRegisterRoutine.map(input=>
								<>
									<div className={styles.nameImageForm}>
										<img src={input.icon} alt={input.id} />
										<p>{input.name}</p>
									</div>
									<Input type={input.type} required placeholder={input.placeholder} title={input.id} id={input.id} name={input.name} />
								</>
							)
						}
				<ButtonForm text={'Registrar'} type={'button'} title={'register'}/>
				</form>			
		</Modal>
	)
}
