import styles from "../styles/Forum.module.css";

import { useEffect, useState } from "react";
import Like from "../../../shared/animation/Like";
import ButtonLike from "../../../shared/buttons/components/ButtonLike";
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
						<ButtonLike like={like} setShowAnimation={setShowAnimation} setLike={setLike}/>
						<p>123k</p>
					</div>
					<p className={styles.replies}>replies {reply}</p>
				</div>
			</div>
		</div>
	);
}
