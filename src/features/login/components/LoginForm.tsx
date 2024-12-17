import { useInputsForm } from '../../../hooks/useInputsForm'
import ButtonForm from '../../../shared/buttons/components/ButtonForm'
import Input from '../../../shared/input/components/Input'
import styles from '../styles/Login.module.css'

export default function LoginForm() {
	const {inputsLoginForm}=useInputsForm()

	return (
		<section className={styles.container}>
			<h2>Ingresa a tu vida <span>Fitness</span></h2>
			<form className={styles.loginForm}>
				{
					inputsLoginForm.map(input=>
						<div key={input.id}>
							<div className={styles.nameImageForm} key={input.id}>
								<img src={input.icon} alt={input.id} />
								<p>{input.name}</p>
							</div>
							<Input type={input.type} required placeholder={input.placeholder} title={input.id} id={input.id} name={input.name} />
						</div>
					)
				}
			<ButtonForm text={'Iniciar sesion'} type={'submit'} title={'login'}/>	
			</form>
		</section>
	)
}
