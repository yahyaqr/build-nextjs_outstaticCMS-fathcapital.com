import styles from './intro.module.scss'

export default function Intro() {
    return (
        <section className={styles.intro}>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.title}>
                            <span>
                                Our strength lies in our ability to help clients solving their financial needs and grabbing investment opportunity.
                            </span>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className={styles.desc}>
                            <span>
                                Fath Capital is a boutique financial advisory firm <span className={styles.font_bold}>founded by a team of highly qualified individuals</span>, each with around 15 years of specialized and interdisciplinary experience. Our
                                strength lies in our ability to <span className={styles.font_bold}>help clients solving their financial needs and grabbing investment opportunity</span>. We specialize in Pre-IPO advisory, Capital Raising, Merger &amp; Acquisition,
                                Debt Restructuring, and Forensic Investigation, but we are also highly proficient in other financial service areas.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
