import { useSidebarData } from '../../../hooks/useSidebarData';
import Item from './Item';
import styles from '../styles/Header.module.css'
import { useState } from 'react';
import LogoIcon from '../../../assets/SistemaGym.png'
import { useScreenSize } from '../../../hooks/useScreenSize';
import { NavLink } from 'react-router-dom';


export default function Header() {
	const {sidebarData} = useSidebarData();
	const [itemClick, setItemClick] = useState('Home')
	const {width}=useScreenSize()
	const handleClick = (title: string) => {
		setItemClick(title)
	}
    return (
        <header className={styles.header} >
			{width >1099 &&(
				<div className={styles.containerLogo}>
					<img src={LogoIcon} alt="" />
					<h2>Gym</h2>
				</div>
			)}
			<div className={styles.actions}>
				{sidebarData.map(item=>
				<NavLink to={item.path} key={item.title} className={styles.navLink}>
					<Item
						key={item.title}
						data={item}
						itemClick={itemClick} handleClick={handleClick}
					/>
				</NavLink>
					
					)
				}
			</div>
            {
				width > 1099 && (
					<div className={styles.buttons}>
						<NavLink to={'login'}>
							<button className={styles.buttonLogin}>Iniciar sesión</button>
						</NavLink>
						<NavLink to={'register'}>
							<button className={styles.buttonSignUp}>Registrarme</button>

						</NavLink>
					</div>
				)
			}
			
        </header>
    )
}
