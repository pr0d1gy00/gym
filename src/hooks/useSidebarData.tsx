import { useEffect, useState } from 'react'
import HomeIcon from '../assets/hogar.webp'
import RoutineIcon from '../assets/rutina-de-ejercicio.webp'
import ForumIcon from '../assets/discusion.webp'
export type ActionsDataProps={
	icon:string,
	path:string,
	title:string
}

const home:ActionsDataProps={
	icon:HomeIcon,
	path:"home",
	title:"Home"
}
const routine:ActionsDataProps={
	icon:RoutineIcon,
	path:"routines",
	title:"Routines"
}
const forum:ActionsDataProps={
	icon:ForumIcon,
	path:'forum',
	title:'Forum'
}
export const useSidebarData=()=>{
	const [sidebarData,setSidebarData]=useState<ActionsDataProps[]>([])

	useEffect(()=>{
		return setSidebarData(()=>[
			home,
			routine,
			forum
		])
		

	},[])

	return {
		sidebarData
	}
}