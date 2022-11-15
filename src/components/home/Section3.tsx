import styles from './section3.module.scss'

export default function Section3() {
    const active = {
        1: true,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false
    }

    function showContent(e) {
        console.log(e);
        for (let num in active) {
            active[num] = false;
        }
        active[e] = true;
        console.log(active);
        // var activeParentElement = document.querySelector(element).parentNode;
        // var parents = document.querySelector(".round-line").children;
        // for (var i = 0; i < parents.length; i++) {
        // var elementParent = parents[i];
        // if (elementParent == activeParentElement) {
        // var target = elementParent.children[0];
        // var targetText = target.children[0];
        // var targetHead = targetText.children[0];
        // var targetBody = targetText.children[1];
        // target.classList.add("active-dot");
        // targetHead.style.fontWeight = "700";
        // targetBody.removeAttribute("hidden");
        // var targetHeight = targetText.clientHeight;
        // target.style.marginBottom = targetHeight + "px";
        // console.log(targetHeight);
        // } else {
        // var nonTarget = elementParent.children[0];
        // var nonTargetHead = nonTarget.children[0].children[0];
        // var nonTargetBody = nonTarget.children[0].children[1];
        // nonTarget.classList.remove("active-dot");
        // nonTargetHead.style.fontWeight = "400";
        // nonTargetBody.setAttribute("hidden", true);
        // nonTarget.removeAttribute("style");
    }

    return (
        <section className={`vertical-scrolling container-fluid ${styles['s3']}`}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center align-items-center p-0">
                    <img draggable="false" src="./img/img-header-why-back.png" alt="whyback" className="img-back" />
                    <span className="header">Why Us</span>
                </div>
                <div className="col-11 col-sm-10 col-md-8 ml-2 mt-5">
                    <div className={styles['vertical-line']}>
                        <div className={`${styles['round-line']} d-flex flex-column`}>
                            <div className="row" onClick={() => showContent(1)}>
                                <div className={`${styles.dot} ${active[1] ? styles['active-dot'] : ''}`}>
                                    <div className={styles['timeline-text']}>
                                        <h3 className={`${styles['timeline-head']} th1`}>Well Known Reputable Advisor</h3>
                                        <h4 className={`${styles['timeline-body']}`}>Focus to increase client valuation proposition and firm sitting at their
                                            side.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row" onClick={() => showContent(2)}>
                                <div className={`${styles.dot} ${active[2] ? styles['active-dot'] : ''}`}>
                                    <div className={styles['timeline-text']}>
                                        <h3 className={`${styles['timeline-head']} th2`}>Syariah Expertise</h3>
                                        <h4 className={`${styles['timeline-body']}`} >Experience in syariah financing and fund raising. Our key members
                                            are licensed syariah experts by OJK.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row" onClick={() => showContent(3)}>
                                <div className={`${styles.dot} ${active[3] ? styles['active-dot'] : ''}`}>
                                    <div className={styles['timeline-text']}>
                                        <h3 className={`${styles['timeline-head']} th3`}>End-to-End Capital Market Services and Experiences</h3>
                                        <h4 className={`${styles['timeline-body']}`} >FATH Capital served starting from the pre-IPO financing, IPO
                                            process, roadshow, until post-IPO corporate actions (maintain share prices, right-issues, backdoor
                                            listing).</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row" onClick={() => showContent(4)}>
                                <div className={`${styles.dot} ${active[4] ? styles['active-dot'] : ''}`}>
                                    <div className={styles['timeline-text']}>
                                        <h3 className={`${styles['timeline-head']} th4`}>Well Known Reputable Advisor</h3>
                                        <h4 className={`${styles['timeline-body']}`} >Focus to increase client valuation proposition and firm sitting at
                                            their side.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row" onClick={() => showContent(5)}>
                                <div className={`${styles.dot} ${active[5] ? styles['active-dot'] : ''}`}>
                                    <div className={styles['timeline-text']}>
                                        <h3 className={`${styles['timeline-head']} th5`}>Amanah – Trustworth – Integrity</h3>
                                        <h4 className={`${styles['timeline-body']}`} >Focus to increase client valuation proposition and firm sitting at
                                            their side.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row" onClick={() => showContent(6)}>
                                <div className={`${styles.dot} ${active[6] ? styles['active-dot'] : ''}`}>
                                    <div className={styles['timeline-text']}>
                                        <h3 className={`${styles['timeline-head']} th6`}>Extensive Network to Investors</h3>
                                        <h4 className={`${styles['timeline-body']}`} >Access to more than 40 investors with different industries, such as
                                            Energy, Mining, HealthCare, Retail, Properties, etc both local and foreigners.</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row" onClick={() => showContent(7)}>
                                <div className={`${styles.dot} ${active[7] ? styles['active-dot'] : ''}`}>
                                    <div className={styles['timeline-text']}>
                                        <h3 className={`${styles['timeline-head']} th7`}>Comfort and Save</h3>
                                        <h4 className={`${styles['timeline-body']}`} >
                                            High Compliance and Good Corporate Governance (GCG) practices. FATH Capital also served law
                                            enforcement (BPK, KPK, KEJAKSAAN AGUNG, POLICE DEPARTMENT, etc) as their Audit and Financial
                                            experts.
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}