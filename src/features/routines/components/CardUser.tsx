import styles from '../styles/Routines.module.css'
import LikeIcon from '../../../assets/corazonLleno.png'
import BicepsIcon from "../../../assets/biceps.webp";
import TricepsIcon from "../../../assets/triceps.webp";
import LegsIcon from "../../../assets/pierna.webp";
import ButtocksIocn from "../../../assets/gluteo.webp";
import ShoulderIcon from "../../../assets/hombro.webp";
import BackIcon from "../../../assets/atras.webp";

type CardUserProps={
	image:string
	name:string
	user:string
	likes:string
	routine:string
}

export default function CardUser({image,name,user,likes,routine}:CardUserProps) {
	return (
		<div className={styles.cardUser}>
			<div className={styles.cardUserImage}>
				<img src={image} alt={name} />
			</div>
			<div className={styles.cardUserInfo}>
				<p className={styles.cardUserInfoName}>{name}</p>
				<p className={styles.cardUserInfoUserName}>{user}</p>
				<div className={styles.cardUserLikesRoutine}>
					<div>
						<img src={LikeIcon} alt="likes" className={styles.likeIcon}/>
						<p>{' '}{likes}</p>
					</div>
					<div>
						<p>Rutina: </p>
						<img
							src={
								routine === "Biceps"
									? BicepsIcon
									: routine === "Triceps"
									? TricepsIcon
									: routine === "Back"
									? BackIcon
									: routine === "Legs"
									? LegsIcon
									: routine === "Buttocks"
									? ButtocksIocn
									: routine === "Shoulder"
									? ShoulderIcon
									: ""
							}
							alt=""
							className={styles.cardUserRoutineImg}
						/>
					</div>
				</div>
				
			</div>
		</div>
	)
}
