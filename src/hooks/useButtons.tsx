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
const biceps:useButtonsProps={
	text:'Biceps',
	type:'button',
	title:'biceps',
	id:'biceps'
}
const triceps:useButtonsProps={
	text:'Triceps',
	type:'button',
	title:'triceps',
	id:'triceps'
}
const shoulder:useButtonsProps={
	text:'Shoulder',
	type:'button',
	title:'shoulder',
	id:'shoulder'
}
const back:useButtonsProps={
	text:'Back',
	type:'button',
	title:'back',
	id:'back'
}
const allExercises:useButtonsProps={
	text:'All Exercises',
	type:'button',
	title:'allExercises',
	id:'allExercises'
}
const buttocks:useButtonsProps={
	text:'Buttocks',
	type:'button',
	title:'buttocks',
	id:'buttocks'
}
const legs:useButtonsProps={
	text:'Legs',
	type:'button',
	title:'legs',
	id:'legs'
}
export const useButtons=()=>{
	const [buttons,setButtons]=useState<useButtonsProps[]>([])
	const [buttonRoutines,setButtonsRoutines]=useState<useButtonsProps[]>([])
	useEffect(()=>{
		setButtons(()=>[
			moreLike,
			lessLike,
			mostPopular,
			lessPopular,
			allPost
		])
		setButtonsRoutines(()=>[
			allExercises,
			biceps,
			triceps,
			legs,
			buttocks,
			shoulder,
			back
		])
	},[])

	return {
		buttons,
		buttonRoutines
	}
}