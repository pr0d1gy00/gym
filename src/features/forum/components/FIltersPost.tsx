import styles from '../styles/Forum.module.css'

export default function FIltersPost() {
	return (
		<div className={styles.filterPostContainer}>
			<h3>Filtra aqui los post que quieres ver!</h3>
			<div className={styles.buttonActions}>
				<button title='MostPopular' type='submit' id='MostPopular' className={styles.buttonFilter}>Most Popular</button>
				<button title='LessPopular' type='submit' id='LessPopular' className={styles.buttonFilter}>LEss Popular</button>
				<button title='MoreLike' type='submit' id='MoreLike' className={styles.buttonFilter}>More Likes</button>
				<button title='LessLike' type='submit' id='LessLike' className={styles.buttonFilter}>Less Like</button>
				<button title='LessLike' type='submit' id='LessLike' className={styles.buttonFilter}>Less Like</button>
				<button title='LessLike' type='submit' id='LessLike' className={styles.buttonFilter}>Less Like</button>
				<button title='MostPopular' type='submit' id='MostPopular' className={styles.buttonFilter}>Most Popular</button>
				<button title='MostPopular' type='submit' id='MostPopular' className={styles.buttonFilter}>Most Popular</button>
			</div>
			

		</div>
	)
}
