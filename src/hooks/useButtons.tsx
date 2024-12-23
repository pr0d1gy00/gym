import { useEffect, useState } from "react";

export type useButtonsProps={
	text:string;
	type:'submit' | 'button' | 'reset';
	title:string
	id:string
} 

const moreLike:useButtonsProps={
	text:'More like',
	type:'button',
	title:'moreLike',
	id:'moreLike'
}

const lessLike:useButtonsProps={
	text:'Less like',
	type:'button',
	title:'lessLike',
	id:'lessLike'
}

const mostPopular:useButtonsProps={
	text:'Most popular',
	type:'button',
	title:'mostPopular',
	id:'mostPopular'
}
const lessPopular:useButtonsProps={
	text:'Less popular',
	type:'button',
	title:'lessPopular',
	id:'lessPopular'
}
const allPost:useButtonsProps={
	text:'All post',
	type:'button',
	title:'allPost',
	id:'allPost'
}

export const useButtons=()=>{
	const [buttons,setButtons]=useState<useButtonsProps[]>([])

	useEffect(()=>{
		setButtons(()=>[
			moreLike,
			lessLike,
			mostPopular,
			lessPopular,
			allPost
		])
	},[])

	return {
		buttons
	}
}