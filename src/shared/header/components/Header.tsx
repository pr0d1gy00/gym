import { useSidebarData } from '../../../hooks/useSidebarData';
import Item from './Item';
import styles from '../styles/Header.module.css'
import { useState } from 'react';
import icon from '../../../assets/candado.webp'
import { useScreenSize } from '../../../hooks/useScreenSize';


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
					<Item
						key={item.title}
						data={item}
						itemClick={itemClick} handleClick={handleClick}
					/>
					)
				}
			</div>
            {
				width > 1099 && (
					<div className={styles.buttons}>
						<button className={styles.buttonLogin}>Iniciar sesión</button>
						<button className={styles.buttonSignUp}>Registrarme</button>
					</div>
				)
			}
			
        </header>
    )
}
