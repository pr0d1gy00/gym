import styles from '../styles/Button.module.css'
import LikeIcon from '../../../assets/corazon.png'
import LikeFilledIcon from '../../../assets/corazonLleno.png'
import { Dispatch, SetStateAction } from 'react'

type ButtonLikeProps={
	like:boolean
	setLike:Dispatch<SetStateAction<boolean>>
	setShowAnimation:Dispatch<SetStateAction<boolean>>

}

export default function ButtonLike({like,setLike,setShowAnimation}:ButtonLikeProps) {

	return (
		<button title="like" 
			onClick={()=>{
				setLike(!like)
				setShowAnimation(!like) 
			}}
				className={styles.like}
			>
				<img src={like ? LikeFilledIcon : LikeIcon } alt="" />
		</button>
	)
}
