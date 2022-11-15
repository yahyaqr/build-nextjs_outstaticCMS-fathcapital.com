import LNav from "../nav/LNav"
import styles from './section1.module.scss'

export default function Section1() {
    return (
        <>
            <LNav page="home" />
            <section className={`vertical-scrolling ${styles['s1']}`}>
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-sm-8 col-lg-10 mx-auto">
                            <h1 className={`${styles['display-4']}`}>WE DELIVER SOUND &amp; SPECIALIZE SERVICE</h1>
                        </div>
                        <div className="col-10 mx-auto">
                            <p className={`${styles['lead']}`}>
                                Our strength lies in our ability to help clients solving their financial needs and grabbing investment
                                opportunity.
                            </p>
                        </div>
                        <div className="col-10 mx-auto">
                            <div className={`${styles['btn-scroll']}`}>
                                <a href="#whatwedo">
                                    <img draggable="false" src="./img/btn-arrow-down.png" alt="arrow" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
