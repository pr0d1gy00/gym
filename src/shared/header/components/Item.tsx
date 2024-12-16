import {NavLink } from "react-router-dom"
import { ActionsDataProps } from "../../../hooks/useSidebarData"
import styles from '../styles/Header.module.css'
type ItemProps ={
    data: ActionsDataProps
	itemClick:string
	handleClick:(title: string) => void
}

export default function Item({data,itemClick,handleClick}:ItemProps) {
	return (
		<div className={itemClick === data.title ? styles[itemClick] : styles.itemHeader} onClick={() => handleClick(data.title)} key={data.title}>
			<img src={data.icon} alt={data.title} />
			<p>{data.title}</p>
		</div>
	)
}
