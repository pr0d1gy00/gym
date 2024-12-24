import styles from '../styles/Routines.module.css'
import CardRoutine from './CardRoutine'
import ImageRoutine from '../../../assets/3_b3a89075-032f-4ee9-af11-39dba5efa88c.webp'
import { useGymStore } from '../../../store/store'
import ButtonAdd from '../../../shared/buttons/components/ButtonAdd'
import ModalAddRoutine from './ModalAddRoutine'
import FiltersPost from '../../forum/components/FiltersPost'
import { useButtons } from '../../../hooks/useButtons'
import ButtonFIlter from '../../../shared/buttons/components/ButtonFIlter'
import UserWithMoreLike from './UserWithMoreLike'
import { useScreenSize } from '../../../hooks/useScreenSize'

export default function Routines() {
	const {modal}=useGymStore()
	const {width}=useScreenSize()
	const {buttonRoutines}=useButtons()
	return (
		<section className={styles.container}>
			{!modal && <ButtonAdd/>}
			{modal && <ModalAddRoutine/>}
			{


			}
			{width > 1100 &&
				<div className={styles.grid1}>	
					<UserWithMoreLike/>
				</div>
			}
			<div className={styles.grid2}>
				<FiltersPost>
					{buttonRoutines.map(button=>
							<ButtonFIlter title={button.title} id={button.id} key={button.id} text={button.text} type={button.type}/>
						)}
				</FiltersPost>
				<h2>Mira las rutinas de los demás y usala en tu vida <span>fitness</span></h2>
				<div className={styles.containerRoutines}>
					<CardRoutine info={'Rutina para que tus biceps crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'15'} routine={'Biceps'} id={'1'}/>	
					<CardRoutine info={'Rutina para que tus triceps crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Triceps'} id={'2'}/>
					<CardRoutine info={'Rutina para que tu espalda, oooohh gran espalda crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Back'} id={'3'}/>	
					<CardRoutine info={'Rutina para que tu espalda, oooohh gran espalda crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Back'} id={'4'}/>
					<CardRoutine info={'Rutina para que tu espalda, oooohh gran espalda crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Back'} id={'3'}/>	
					<CardRoutine info={'Rutina para que tu espalda, oooohh gran espalda crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Back'} id={'4'}/>
					<CardRoutine info={'Rutina para que tu espalda, oooohh gran espalda crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Back'} id={'3'}/>	
					<CardRoutine info={'Rutina para que tu espalda, oooohh gran espalda crezcan grandes y fuertes como el amor de mamá, cariño y compresión te quiero dar, tommy tipi'} img={ImageRoutine} exercises={'4'} routine={'Back'} id={'4'}/>
				</div>
			</div>
			<div>

			</div>
			
			
		</section>
	)
}
