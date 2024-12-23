import styles from '../styles/Routines.module.css'
import CardRoutine from './CardRoutine'
import ImageRoutine from '../../../assets/3_b3a89075-032f-4ee9-af11-39dba5efa88c.webp'

export default function Routines() {
	return (
		<section className={styles.container}>
			<h2>Mira las rutinas de los demás y usala en tu vida <span>fitness</span></h2>
			<div className={styles.containerRoutines}>
				<CardRoutine info={'Rutina para que tus biceps crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'15'} routine={'Biceps'}/>	
				<CardRoutine info={'Rutina para que tus triceps crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Triceps'}/>
				<CardRoutine info={'Rutina para que tu espalda, oooohh gran espalda crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Back'}/>	
				<CardRoutine info={'Rutina para que tu espalda, oooohh gran espalda crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Back'}/>
			</div>
			
		</section>
	)
}
