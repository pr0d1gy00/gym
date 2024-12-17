import { useSidebarData } from '../../../hooks/useSidebarData';
import Item from './Item';
import styles from '../styles/Header.module.css'
import { useState } from 'react';
import icon from '../../../assets/candado.webp'
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
				<div>
					<img src={icon} alt="" />
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
						<button className={styles.buttonSignUp}>Registrarme</button>
					</div>
				)
			}
			
        </header>
    )
}
