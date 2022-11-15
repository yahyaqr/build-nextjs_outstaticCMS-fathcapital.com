import styles from './bg.module.scss'

export default function Bg() {
    return (
        <div className="img-container">
            <img draggable="false" src="img/bg-img.png" alt="bg-img.png" className={styles['img-main']} />
        </div>
    )
}
