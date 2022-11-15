import styles from './section4.module.scss'

export default function Section4() {
    return (
        <>
            <section className="vertical-scrolling s4 container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 d-flex justify-content-center align-items-center p-0">
                        <img draggable="false" src="img/img-header-prev-back.png" alt="prevback" className="img-back" />
                        <span className="header">Previous Client</span>
                    </div>
                    <div className="col-10 mt-5">
                        <div className="row row-cols-3 row-cols-md-5 d-flex justify-content-center">
                            <div className="col d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-angkasa.png" alt="angkasa" className="img-fluid" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-satria.png" alt="satria" className="img-fluid" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-pnm.png" alt="pnm" className="img-fluid" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-pln.png" alt="pln" className="img-fluid" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-ojk.png" alt="ojk" className="img-fluid" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-mega.png" alt="mega" className="img-fluid" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-pertamina.png" alt="pertamina" className="img-fluid" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-aero.png" alt="aero" className="img-fluid" />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-idx.png" alt="idx" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row mt-5 d-flex justify-content-center align-items-center">
                            <div className="col text-partner mb-3 col-sm-6 col-md-4 d-flex justify-content-center align-items-center">
                                <span>Official Partner :</span>
                            </div>
                            <div className="col-3 col-md-2 d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-g20.png" alt="g20" className="img-fluid" />
                            </div>
                            <div className="col-3 col-md-2 d-flex justify-content-center align-items-center">
                                <img draggable="false" src="img/img-client-wbaf.png" alt="wbaf" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
