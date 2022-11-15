import styles from './section2.module.scss'

export default function Section2() {
    return (
        <section className={`vertical-scrolling container-fluid ${styles['s2']}`} id="container-whatwedo">
            <div className="row d-flex justify-content-center">
                <div className="col-6 col-md-4 p-0 d-flex justify-content-end">
                    <h1 className={`${styles['text-wwd']} mt-auto pr-5 pb-5`}>
                        What<br />
                        We Do
                    </h1>
                </div>
                <div className="col-6 col-md-4 p-0">
                    <div className={`card card-2 ${styles['card']}`}>
                        <img draggable="false" src="./img/img-cfa.png" alt="cfa" />
                        <div className="card-img-overlay d-flex align-items-end">
                            <h5 className={`card-title card-title2 ${styles['card-title']}`}>
                                Corporate <br />
                                Financial Advisory
                            </h5>
                        </div>
                        <div className={`card-text ${styles['card-text']}`}>
                            <div className={`text d-flex align-items-center ${styles['text']}`}>
                                <h3>
                                    Provide financial advisory to <span className={styles['font-weight-bold']}>maximize corporate valuation</span> as
                                    well as <span className={styles['font-weight-bold']}>financial audit</span> and
                                    <span className={styles['font-weight-bold']}>restructuring, due diligence for private investment</span> and <span
                                        className={styles['font-weight-bold']}>IPO/ICO preparation</span>.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 p-0">
                    <div className={`card card-3 ${styles['card']}`}>
                        <img draggable="false" src="./img/img-crfm.png" alt="crfm" />
                        <div className="card-img-overlay d-flex align-items-end">
                            <h5 className={`card-title card-title3 ${styles['card-title']}`}>
                                Capital Rising <br />
                                &amp; Fund Management
                            </h5>
                        </div>
                        <div className={`card-text ${styles['card-text']}`}>
                            <div className={`text d-flex align-items-center ${styles['text']}`}>
                                <h3>
                                    <span className={styles['font-weight-bold']}>Bridging, project financing, hedge funds, equities and bonds, money
                                        markets, private equities and property</span> with a wide range of traditional and alternative.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 p-0">
                    <div className={`card card-4 ${styles['card']}`}>
                        <img draggable="false" src="./img/img-nme.png" alt="nme" />
                        <div className="card-img-overlay d-flex align-items-end">
                            <h5 className={`card-title card-title4 ${styles['card-title']}`}>
                                New Market <br />
                                Entries
                            </h5>
                        </div>
                        <div className={`card-text ${styles['card-text']}`}>
                            <div className={`text d-flex align-items-center ${styles['text']}`}>
                                <h3>
                                    Provide financial advisory to <span className={styles['font-weight-bold']}>maximize corporate valuation</span> as
                                    well as <span className={styles['font-weight-bold']}>financial audit</span> and
                                    <span className={styles['font-weight-bold']}>restructuring, due diligence for private investment</span> and <span
                                        className={styles['font-weight-bold']}>IPO/ICO preparation</span>.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 p-0">
                    <div className={`card card-5 ${styles['card']}`}>
                        <img draggable="false" src="./img/img-cdt.png" alt="cdt" />
                        <div className="card-img-overlay d-flex align-items-end">
                            <h5 className={`card-title card-title5 ${styles['card-title']}`}>
                                Commercial <br />
                                Deal &amp; Transaction
                            </h5>
                        </div>
                        <div className={`card-text ${styles['card-text']}`}>
                            <div className={`text d-flex align-items-center ${styles['text']}`}>
                                <h3>
                                    Assist diverge corporate actions and commercial deals <span className={styles['font-weight-bold']}>such shares stock
                                        arrangements, investment/divestment options, merger and acquisition, also deal forensic and dispute
                                        investigation</span>.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-4 p-0">
                    <div className={`card card-6 ${styles['card']}`}>
                        <img draggable="false" src="./img/img-svb.png" alt="svb" />
                        <div className="card-img-overlay d-flex align-items-end">
                            <h5 className={`card-title card-title6 ${styles['card-title']}`}>
                                Start-up <br />
                                Venture Builder
                            </h5>
                        </div>
                        <div className={`card-text ${styles['card-text']}`}>
                            <div className={`text d-flex align-items-center ${styles['text']}`}>
                                <h3>
                                    Provide seed funding, raising growth capital, <span className={styles['font-weight-bold']}>advance startup business
                                        ideas, strengthen the team foundation, and connect and scale up</span> ventures growth to the
                                    industrial scale
                                    acceptance and series A/B progression until the IPO stage.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
