import styles from '../styles/Button.module.css'

type ButtonProps={
	text:string
	type:"submit" | "reset" | "button"
	title:string
}

export default function ButtonForm({text,type,title}:ButtonProps) {
	return (
		<button type={type} title={title} className={styles.buttonSend}>{text}</button>

	)
}
