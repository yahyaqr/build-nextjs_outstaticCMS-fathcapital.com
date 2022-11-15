import styles from './header.module.scss'

export default function Header() {
    return (
        <section className={styles.header}>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-12">
                        <span className={`${styles['contact-title']}`}>Get In Touch</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
