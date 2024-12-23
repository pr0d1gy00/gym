import styles from "../styles/Routines.module.css";
import AmountExercisesIcon from "../../../assets/dumbell.webp";
import BicepsIcon from "../../../assets/biceps.webp";
import TricepsIcon from "../../../assets/triceps.webp";
import LegsIcon from "../../../assets/pierna.webp";
import ButtocksIocn from "../../../assets/gluteo.webp";
import ShoulderIcon from "../../../assets/hombro.webp";
import BackIcon from "../../../assets/atras.webp";
import ButtonLike from "../../../shared/buttons/components/ButtonLike";
import { useEffect, useState } from "react";
import Like from "../../../shared/animation/Like";

type CardRoutineProps = {
	info: string;
	img: string;
	exercises: string;
	routine: string;
};

export default function CardRoutine({
	info,
	img,
	exercises,
	routine,
}: CardRoutineProps) {
	const [like, setLike]=useState(false)
	const [showAnimation,setShowAnimation]=useState(false)

	useEffect(()=>{
		setTimeout(()=>setShowAnimation(false),2000)
	},[showAnimation])
	return (
		<a className={styles.card}>
			<div className={styles.cardImage}>
				<div className={styles.cardGradient}></div>
				
				<img src={img} alt={routine} />
			</div>
			<div className={styles.cardInfo}>
				<p>
					<span>Description: </span>
				</p>
				<p className={styles.cardInfoText}>{info}</p>
				<div className={styles.cardRoutineExecises}>
					<ButtonLike like={like} setLike={setLike} setShowAnimation={setShowAnimation}/>
					<p>
						<img src={AmountExercisesIcon} alt="exercises" />
						{exercises}
					</p>
					<p>
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
						/>
						{routine}
					</p>
					{showAnimation && <Like/>}

				</div>
			</div>
		</a>
	);
}
