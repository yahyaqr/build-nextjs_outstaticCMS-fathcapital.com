import styles from './section5.module.scss'

export default function Section5() {
    return (
        <section className="vertical-scrolling s5 container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-12 d-flex justify-content-center align-items-center p-0">
                    <img draggable="false" src="./img/img-header-financial-back.png" alt="finback" className="img-back" />
                    <span className="header">Financial Insight</span>
                </div>
                <div className="col-12 mt-5 no-desktop overlay">
                    <div id="grab" className="main-article">
                        <article>
                            <div className="image mr-sm-4">
                                <a href="blog-detail.html"><img draggable="false" src="img/img-blog-big.png" /></a>
                            </div>
                            <div className="text">
                                <a href="blog-detail.html">
                                    <h2 className="blog-title">IPO Karya Bersama Anugerah</h2>
                                </a>
                                <p className="blog-date">August 8, 2020</p>
                                <p className="blog-p mt-2 mb-0">
                                    Making a large downpayment is not the conservative investment you believe it is. The risks of putting
                                    20% down on a home are real. Know what you should do.
                                </p>
                                <a className="blog-readmore" href="blog-detail.html">Read More &gt;&gt;</a>
                            </div>
                        </article>
                        <article>
                            <div className="image mr-sm-4">
                                <a href="blog-detail.html"><img draggable="false" src="img/img-blog-big.png" /></a>
                            </div>
                            <div className="text">
                                <a href="blog-detail.html">
                                    <h2 className="blog-title">IPO Karya Bersama Anugerah</h2>
                                </a>
                                <p className="blog-date">August 8, 2020</p>
                                <p className="blog-p mt-2 mb-0">
                                    Making a large downpayment is not the conservative investment you believe it is. The risks of putting
                                    20% down on a home are real. Know what you should do.
                                </p>
                                <a className="blog-readmore" href="blog-detail.html">Read More &gt;&gt;</a>
                            </div>
                        </article>
                        <article>
                            <div className="image mr-sm-4">
                                <a href="blog-detail.html"><img draggable="false" src="img/img-blog-big.png" /></a>
                            </div>
                            <div className="text">
                                <a href="blog-detail.html">
                                    <h2 className="blog-title">IPO Karya Bersama Anugerah</h2>
                                </a>
                                <p className="blog-date">August 8, 2020</p>
                                <p className="blog-p mt-2 mb-0">
                                    Making a large downpayment is not the conservative investment you believe it is. The risks of putting
                                    20% down on a home are real. Know what you should do.
                                </p>
                                <a className="blog-readmore" href="blog-detail.html">Read More &gt;&gt;</a>
                            </div>
                        </article>
                        <article>
                            <div className="image mr-sm-4">
                                <a href="blog-detail.html"><img draggable="false" src="img/img-blog-big.png" /></a>
                            </div>
                            <div className="text">
                                <a href="blog-detail.html">
                                    <h2 className="blog-title">IPO Karya Bersama Anugerah</h2>
                                </a>
                                <p className="blog-date">August 8, 2020</p>
                                <p className="blog-p mt-2 mb-0">
                                    Making a large downpayment is not the conservative investment you believe it is. The risks of putting
                                    20% down on a home are real. Know what you should do.
                                </p>
                                <a className="blog-readmore" href="blog-detail.html">Read More &gt;&gt;</a>
                            </div>
                        </article>
                        <div className="d-flex justify-content-center align-items-center mx-auto mb-5">
                            <button className="btn-view-more mb-5" onClick={goto_blog()}><span className="fi-view-more">view
                                more</span></button>
                        </div>
                    </div>
                </div>
                <div className="col-10 mt-5 only-desktop">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-4 d-flex justify-content-center insight"
                            style="background: url(img/img-home-bg.png) center center / cover no-repeat">
                            <div className="insight-meta">
                                <span className="fi-by">by <span className="fw-bold">capt_fathcapital</span></span>
                                <button className="btn btn-uncateg"><span className="fi-uncateg">uncategorized</span></button>
                                <div className="fi-div-title"><span className="fi-date">April 8, 2020</span><br /><span className="fi-title">IPO
                                    Karya Bersama Anugerah</span></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center insight"
                            style="background: url(img/img-home-bg.png) center center / cover no-repeat">
                            <div className="insight-meta">
                                <span className="fi-by">by <span className="fw-bold">capt_fathcapital</span></span>
                                <button className="btn btn-uncateg"><span className="fi-uncateg">uncategorized</span></button>
                                <div className="fi-div-title"><span className="fi-date">April 8, 2020</span><br /><span className="fi-title">IPO
                                    Karya Bersama Anugerah</span></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center insight"
                            style="background: url(img/img-home-bg.png) center center / cover no-repeat">
                            <div className="insight-meta">
                                <span className="fi-by">by <span className="fw-bold">capt_fathcapital</span></span>
                                <button className="btn btn-uncateg"><span className="fi-uncateg">uncategorized</span></button>
                                <div className="fi-div-title"><span className="fi-date">April 8, 2020</span><br /><span className="fi-title">IPO
                                    Karya Bersama Anugerah</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center hide-on-mobile">
                        <div className="col-12 col-md-4 d-flex justify-content-center crop-div">
                            <div className="crop-insight"
                                style="background: linear-gradient(rgba(16, 24, 32, 0) 0%, rgb(16, 24, 32) 35%), url('img/img-home-bg.png') center center / cover no-repeat">
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center crop-div">
                            <div className="crop-insight"
                                style="background: linear-gradient(rgba(16, 24, 32, 0) 0%, rgb(16, 24, 32) 35%), url('img/img-home-bg.png') center center / cover no-repeat">
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center crop-div">
                            <div className="crop-insight"
                                style="background: linear-gradient(rgba(16, 24, 32, 0) 0%, rgb(16, 24, 32) 35%), url('img/img-home-bg.png') center center / cover no-repeat">
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center div-view-more mb-4">
                        <div className="col-3 d-flex justify-content-center align-items-center mx-auto">
                            <button className="btn-view-more" onClick={goto_blog()}><span className="fi-view-more">view more</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
