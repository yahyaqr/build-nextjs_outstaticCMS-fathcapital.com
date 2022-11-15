import styles from './dark-nav.module.scss'

export default function DNav(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-sm navbar-dark shadow-5-strong ${styles['navbar']}`}>
                <ul className={`navbar-nav ${styles['navbar-nav']}`}>
                    <li className={`nav-item ${styles['nav-item']}`}>
                        <a className={`nav-link ${styles['nav-link']} ${(props.page === 'home') ? styles.active : ''}`} aria-current="page" href="/">Home</a>
                    </li>
                    <li className={`nav-item ${styles['nav-item']}`}>
                        <a className={`nav-link ${styles['nav-link']} ${(props.page === 'blog') ? styles.active : ''}`} href="/blog">Blog</a>
                    </li>
                    <li className={`nav-item ${styles['nav-item']}`}>
                        <a className={`nav-link ${styles['nav-link']} ${(props.page === 'about') ? styles.active : ''}`} href="/about">About Us</a>
                    </li>
                    <li className={`nav-item ${styles['nav-item']}`}>
                        <a className={`nav-link ${styles['nav-link']} ${(props.page === 'contact') ? styles.active : ''}`} href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
