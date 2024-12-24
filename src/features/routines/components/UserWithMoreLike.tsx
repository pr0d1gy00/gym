import styles from '../styles/Routines.module.css'
import CardUser from './CardUser'
import UserIcon from '../../../assets/esencia-de-una-persona.webp'


export default function UserWithMoreLike() {
	return (
		<section className={styles.usersWithMorelikeContainer}>
			<h2>Top usuarios con mas likes en sus <span>rutinas</span>!</h2>
			<div className={styles.listUsers}>
				<CardUser image={UserIcon} name={'Jhon Esteban Jose'} user={'@jhonsito'} likes={'4500'} routine={'Biceps'}/>
                <CardUser image={UserIcon} name={'Maria Fernanda'} user={'@mariaf'} likes={'4200'} routine={'Triceps'}/>
                <CardUser image={UserIcon} name={'Carlos Andres'} user={'@carlosandres'} likes={'4000'} routine={'Back'}/>
                <CardUser image={UserIcon} name={'Laura Sofia'} user={'@laurasofia'} likes={'3800'} routine={'Shoulder'}/>
                <CardUser image={UserIcon} name={'Pedro Pablo'} user={'@pedropablo'} likes={'3600'} routine={'Buttocks'}/>
                <CardUser image={UserIcon} name={'Ana Lucia'} user={'@analucia'} likes={'3400'} routine={'Legs'}/>
			</div>
		</section>
	)
}
