import Input from '../../../shared/input/components/Input'
import styles from '../styles/Register.module.css'
import { useInputsForm } from '../../../hooks/useInputsForm'
export default function RegisterForm() {
	const {inputsForm}=useInputsForm()

	return (
		<section className={styles.container}>
			<h2>Registrate para empezar con tu vida <span>Fitness</span></h2>
			<form action="POST" className={styles.registerForm}>
				{inputsForm.map(input=>
					<>
						<div className={styles.nameImageForm}>
							<img src={input.icon} alt={input.id} />
							<p>{input.name}</p>
						</div>
						<Input type={input.type} required placeholder={input.placeholder} title={input.id} id={input.id} name={input.name} />
					</>
					
				)

				}
				<button className={styles.buttonSend}>Registrarme</button>
			</form>
		</section>
	)
}
