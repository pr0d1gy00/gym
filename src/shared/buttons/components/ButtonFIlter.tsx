import {ButtonHTMLAttributes} from 'react'
import styles from '../styles/Button.module.css'
type ButtonFilterProps = {
	text:string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function ButtonFIlter({text,...props}:ButtonFilterProps) {
	return (
		<button {...props} className={styles.buttonFilter}>{text}</button>
	)
}
