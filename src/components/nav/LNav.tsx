import styles from './light-nav.module.scss'

export default function LNav(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-sm navbar-light shadow-5-strong ${styles['navbar']}`}>
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
