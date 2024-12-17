import { useEffect, useState } from 'react'
import NameIcon from '../assets/negocio.webp'
import MailIcon from '../assets/correo (1).webp'
import UserIcon from '../assets/avatar.webp'
import PasswordIcon from '../assets/candado.webp'
export type InputsFormProps={
	id:string
	name:string
	icon:string
	type:string
	placeholder:string
}

const name:InputsFormProps={
	id:'name',
	name:'Nombre',
	icon:NameIcon,
	type:'text',
	placeholder:'Jhon Evan'
}
const surname:InputsFormProps={
	id:'surname',
	name:'Apellido',
	icon:NameIcon,
	type:'text',
	placeholder:'Smith Brown'
}
const mail:InputsFormProps={
	id:'mail',
	name:'Correo',
	icon:MailIcon,
	type:'email',
	placeholder:'correo@correo.com'
}
const nameUser:InputsFormProps={
	id:'userName',
	name:'Nombre de usuario',
	icon:UserIcon,
	type:'text',
	placeholder:'jhonBrown01'
}
const password:InputsFormProps={
	id:'password',
	name:'Contraseña',
	icon:PasswordIcon,
	type:'passowrd',
	placeholder:'********'
}
const repeatPassword:InputsFormProps={
	id:'passwordRepeat',
	name:'Repetir Contraseña',
	icon:PasswordIcon,
	type:'passowrd',
	placeholder:'********'

}

export const  useInputsForm=()=>{
	const [inputsForm,setInputsForm]=useState<InputsFormProps[]>([])
	const [inputsLoginForm,setInputsLoginForm]=useState<InputsFormProps[]>([])
	useEffect(()=>{
		setInputsForm(()=>[
			name,
			surname,
			mail,
			nameUser,
			password,
			repeatPassword
		])
		setInputsLoginForm(()=>[
			nameUser,
			repeatPassword	
		])
	},[])
	
	return{
		inputsForm,
		inputsLoginForm
	}
}