import styles from "../styles/Forum.module.css";
import LikeIcon from '../../../assets/corazon.png'
import LikeFilledIcon from '../../../assets/corazonLleno.png'
import { useEffect, useState } from "react";
import Like from "../../../shared/animation/Like";
type PostProps = {
	title: string;
	image: string;
	preview: string;
	user: string;
	reply: string;
};

export default function Post({
	title,
	image,
	preview,
	user,
	reply,
}: PostProps) {
	const [like, setLike]=useState(false)
	const [showAnimation,setShowAnimation]=useState(false)

	useEffect(()=>{
		setTimeout(()=>setShowAnimation(false),2000)
	},[showAnimation])
	console.log(showAnimation)
	return (
		<div className={styles.post}>
			<div className={styles.image}>
				<img src={image} alt={user} />
			</div>
			<div className={styles.bodyPost}>
				<h3>{title}</h3>
				<p className={styles.user}>@{user}</p>
				<p className={styles.preview}>{preview}</p>
				{showAnimation && <Like/>}
				<div className={styles.likeContainer}>
					<div>
						<button title="like" 
						onClick={()=>{
							
							setLike(!like)
							setShowAnimation(!like) 
						}}
							className={styles.like}
						>
							<img src={like ? LikeFilledIcon : LikeIcon } alt="" />
						</button>
						<p>123k</p>
					</div>
					<p className={styles.replies}>replies {reply}</p>
				</div>
			</div>
		</div>
	);
}
