// import cx from 'classnames'
import styles from './carousel.module.scss'
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit'

export default function Carousel() {
    return (
        <section className={styles['description']}>
            <div className={"container d-flex justify-content-center"}>
                <div className={styles['row']}>
                    <div className={styles['col-12']}>
                        <MDBCarousel showIndicators showControls fade>
                            <MDBCarouselItem
                                className={styles["carousel-item"]}
                                itemId={1}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                                alt="slide"
                            >
                                <div className={styles["carousel-head"]} >
                                    <span className={styles["carousel-number-text"]} > 01</span >
                                    <span className={styles["carousel-numberper-text"]} > /08</span ><br />
                                    <span className={styles["carousel-title-text"]} > Financial Advisory</span >
                                    <div className={styles["carousel-line"]} ></div >
                                </div >
                                <div className={styles["carousel-body"]} >
                                    <div className={styles["carousel-span"]} >
                                        <span>
                                            Working with FATH CAPITAL connects our clients to a large of experience and expertise. By listening to their financial objectives, our team will identify the right solution best suited to our clients’ needs. Specialized
                                            services include :
                                        </span>
                                    </div >
                                    <div className={styles["carousel-ul"]} >
                                        <ul>
                                            <li>Financial Analysis and Modelling</li>
                                            <li>Business Valuation</li>
                                            <li>Capital Structuring (including External Financing)</li>
                                            <li>Facilitation of Holding Structures Set-Up</li>
                                            <li>Consultant & Professional Engagement</li>
                                        </ul>
                                    </div >
                                </div >
                            </MDBCarouselItem >
                            <MDBCarouselItem
                                className={styles["carousel-item"]}
                                itemId={2}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                                alt="slide"
                            >
                                <div className={styles["carousel-head"]} >
                                    <span className={styles["carousel-number-text"]} > 02</span >
                                    <span className={styles["carousel-numberper-text"]} > /08</span ><br />
                                    <span className={styles["carousel-title-text"]} > Pre - ipo Advisory</span >
                                    <div className={styles["carousel-line"]} ></div >
                                </div >
                                <div className={styles["carousel-body"]} >
                                    <div className={styles["carousel-span"]} >
                                        <span>
                                            Advising our clients to make them ready for going public. All requirements to go public needed will be guided by us to maximize shareholder values. Starting from review of clients condition then proposing to clients what
                                            they should do before they are going public and finally submitting the requirements to regulatory and working closely with Underwriter and supporting parties to make sure IPO success. Specialized services include:
                                        </span>
                                    </div >
                                    <div className={styles["carousel-ul"]} >
                                        <ul>
                                            <li>Review IPO readiness of clients</li>
                                            <li>Proposing strategic actions what clients should do before IPO (including what structure are better for them)</li>
                                            <li>Advising Equity Story what makes clients value high</li>
                                            <li>Attempting to get higher valuation for clients</li>
                                            <li>Advising clients in selecting of underwriter and supporting parties which are suitable with their size and IPO goals</li>
                                            <li>Advising clients when submitting requirements to Regulatory</li>
                                        </ul>
                                    </div >
                                </div >
                            </MDBCarouselItem >
                            <MDBCarouselItem
                                className={styles["carousel-item"]}
                                itemId={3}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                                alt="slide"
                            >
                                <div className={styles["carousel-head"]} >
                                    <span className={styles["carousel-number-text"]} > 03</span >
                                    <span className={styles["carousel-numberper-text"]} > /08</span ><br />
                                    <span className={styles["carousel-title-text"]} > Merger & Acquisition</span >
                                    <div className={styles["carousel-line"]} ></div >
                                </div >
                                <div className={styles["carousel-body"]} >
                                    <div className={styles["carousel-span"]} >
                                        <span>
                                            We advise our clients to execute their M&A plans. M&A is one of growth strategy which many companies pursuing nowadays. Not all M&A process is going successfully. Some M&A are failures. We help our clients to minimize
                                            risk of failures. Starting with the right strategy for M&A. Furthermore, we advise how to identify and give clients introduction to potential strategic and financial partners. Specialized services include:
                                        </span>
                                    </div >
                                    <div className={styles["carousel-ul"]} >
                                        <ul >
                                            <li>Advising M&A strategy</li>
                                            <li>Identification and introduction of potential strategic and financial partners</li>
                                            <li>Target research and evaluation</li>
                                            <li>Project management of the M&A and fund raising process</li>
                                            <li>Advising in the evaluation of offers from Investors</li>
                                            <li>Advising in negotiation, project structuring and due diligence process</li>
                                        </ul>
                                    </div >
                                </div >
                            </MDBCarouselItem >
                            <MDBCarouselItem
                                className={styles["carousel-item"]}
                                itemId={4}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                                alt="slide"
                            >
                                <div className={styles["carousel-head"]} >
                                    <span className={styles["carousel-number-text"]} > 04</span >
                                    <span className={styles["carousel-numberper-text"]} > /08</span ><br />
                                    <span className={styles["carousel-title-text"]} > Capital Raising</span >
                                    <div className={styles["carousel-line"]} ></div >
                                </div >
                                <div className={styles["carousel-body"]} >
                                    <div className={styles["carousel-span"]} >
                                        <span>
                                            With our extensive network, we advise our clients in identifying the right strategy in raising capital. Whether they should go to raise capital from public through IPO or keep private and seeking funding from private
                                            investors. We also advise different structures which are better and suitable with clients condition. Basically there are two choices that clients can choose, either equity-based or debt-based. Specialized services include:
                                        </span>
                                    </div >
                                    <div className={styles["carousel-ul"]} >
                                        <ul>
                                            <li>Review of Clients condition and advising what type of capital raising suitable for them</li>
                                            <li>Identification and introduction of potential strategic and financial partners</li>
                                            <li>Target research and evaluation</li>
                                            <li>Project management in fund raising process</li>
                                            <li>Assistance in evaluation of offers from Investors</li>
                                            <li>Advising in negotiation</li>
                                        </ul>
                                    </div >
                                </div >
                            </MDBCarouselItem >
                            <MDBCarouselItem
                                className={styles["carousel-item"]}
                                itemId={5}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                                alt="slide"
                            >
                                <div className={styles["carousel-head"]} >
                                    <span className={styles["carousel-number-text"]} > 05</span >
                                    <span className={styles["carousel-numberper-text"]} > /08</span ><br />
                                    <span className={styles["carousel-title-text"]} > Investment Advisory: Ipo Fund Management</span >
                                    <div className={styles["carousel-line"]} ></div >
                                </div >
                                <div className={styles["carousel-body"]} >
                                    <div className={styles["carousel-span"]} >
                                        <span>
                                            Each IPO give us an investment opportunity. From buy-side perspective, we offer our clients to invest their money in IPO. We evaluate which IPO is good prospective which clients can decide to invest. Specialized services
                                            include:
                                        </span>
                                    </div >
                                    <div className={styles["carousel-ul"]} >
                                        <ul>
                                            <li>Review and Identification of IPO prospective</li>
                                            <li>Facilitate clients to invest in IPO</li>
                                            <li>Provide clients high return opportunity in each IPO</li>
                                            <li>Manage clients money to get higher return</li>
                                        </ul>
                                    </div >
                                </div >
                            </MDBCarouselItem >
                            <MDBCarouselItem
                                className={styles["carousel-item"]}
                                itemId={6}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                                alt="slide"
                            >
                                <div className={styles["carousel-head"]} >
                                    <span className={styles["carousel-number-text"]} > 06</span >
                                    <span className={styles["carousel-numberper-text"]} > /08</span ><br />
                                    <span className={styles["carousel-title-text"]} > Investment Advisory: Bridging IPO Fund Management</span >
                                    <div className={styles["carousel-line"]} ></div >
                                </div >
                                <div className={styles["carousel-body"]} >
                                    <div className={styles["carousel-span"]} >
                                        <span>
                                            Investing in Pre-IPO give clients an attractive return investment opportunity. We are facilitating clients to invest in target companies that are willing to go public in less than two years ahead. After target companies
                                            going public, clients can exit and obtain high return. Specialized services include:
                                        </span>
                                    </div >
                                    <div className={styles["carousel-ul"]} >
                                        <ul>
                                            <li>Identification and introduction of target companies</li>
                                            <li>Bridging clients with the target companies</li>
                                            <li>Provide clients high return opportunity in Pre-IPO investing</li>
                                            <li>Manage clients money to get higher return</li>
                                        </ul>
                                    </div >
                                </div >
                            </MDBCarouselItem >
                            <MDBCarouselItem
                                className={styles["carousel-item"]}
                                itemId={7}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                                alt="slide"
                            >
                                <div className={styles["carousel-head"]} >
                                    <span className={styles["carousel-number-text"]} > 07</span >
                                    <span className={styles["carousel-numberper-text"]} > /08</span ><br />
                                    <span className={styles["carousel-title-text"]} > Valuation</span >
                                    <div className={styles["carousel-line"]} ></div >
                                </div >
                                <div className={styles["carousel-body"]} >
                                    <div className={styles["carousel-span"]} >
                                        <span>
                                            Valuation is an art. We advise our clients to maximize their company valuation. From clients information, we will guide a compelling story to get higher valuation for clients. Specialized services include:
                                        </span>
                                    </div >
                                    <div className={styles["carousel-ul"]} >
                                        <ul>
                                            <li>Advising of attractive growth opportunity to be obtained in coming years</li>
                                            <li>Identifying business risk which will discount the value of company</li>
                                            <li>Provide business valuation calculation</li>
                                        </ul>
                                    </div >
                                </div >
                            </MDBCarouselItem >
                            <MDBCarouselItem
                                className={styles["carousel-item"]}
                                itemId={8}
                                src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                                alt="slide"
                            >
                                <div className={styles["carousel-head"]} >
                                    <span className={styles["carousel-number-text"]} > 08</span >
                                    <span className={styles["carousel-numberper-text"]} > /08</span ><br />
                                    <span className={styles["carousel-title-text"]} > Forensic Investigation</span >
                                    <div className={styles["carousel-line"]} ></div >
                                </div >
                                <div className={styles["carousel-body"]} >
                                    <div className={styles["carousel-span"]} >
                                        <span>
                                            Our forensic investigation will look beyond the numbers to identify missing or incomplete data, financial discrepancies, and/or financial fraud. We help clients through the legal and operational complexities, and come to
                                            timely decisions so that clients can get on with business. Specialized services include:
                                        </span>
                                    </div >
                                    <div className={styles["carousel-ul"]} >
                                        <ul>
                                            <li>Investigate all numbers to prevent the fraud</li>
                                            <li>Identification and introduction of potential strategic and financial partners</li>
                                            <li>Check all legal issue</li>
                                            <li>Review operational risk</li>
                                        </ul>
                                    </div >
                                </div >
                            </MDBCarouselItem >
                        </MDBCarousel >
                    </div >
                </div >
            </div >
        </section >
    )
}
