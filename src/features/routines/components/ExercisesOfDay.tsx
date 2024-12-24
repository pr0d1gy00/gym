import styles from '../styles/Routines.module.css'
export default function ExercisesOfDay() {
	return (
		<div className={styles.exercisesOfDayContainer}>
			<h2><span>Ejercicio</span> del día</h2>
			<iframe 
				className={styles.roundedVideo}
				frameBorder={0}
                width="100%" 
                height="800" 
                src="https://www.youtube.com/embed/jy8L7l-3hRI" 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
		</div>
	)
}
