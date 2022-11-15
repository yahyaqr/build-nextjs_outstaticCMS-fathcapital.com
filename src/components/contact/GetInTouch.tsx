import styles from './getintouch.module.scss'

export default function GetInTouch() {
    return (
        <section className={`${styles['get-in-touch']}`}>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className={`col-12 ${styles['col-12']}`}>
                        <div className={`card ${styles['div-contact']}`}>
                            <div className={`card-body ${styles['card-body']}`}>
                                <form>
                                    <div className="form-group row">
                                        <div className={`col-12 col-md-6 ${styles['col-12']}`}>
                                            <label className={`${styles['title-input-contact']}`} >Your Name (required)</label>
                                            <input type="text" className={`form-control ${styles['form-control']}`} id="inputName" placeholder="" />
                                        </div>
                                        <div className={`col-12 col-md-6 ${styles['col-12']}`}>
                                            <label className={`${styles['title-input-contact']}`}>Your Email (required)</label>
                                            <input type="email" className={`form-control ${styles['form-control']}`} id="inputEmail" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className={`col-12 ${styles['col-12']}`}>
                                            <label className={`${styles['title-input-contact']}`}>Pick Your Service</label>
                                            <select id="inputService" className={`form-control ${styles['form-control']}`}>
                                                <option className={styles.option} value="1" selected>Consulting</option>
                                                <option className={styles.option} value="2">Planning</option>
                                                <option className={styles.option} value="3">Nutrition</option>
                                            </select>
                                        </div>
                                        <div className={`col-12 ${styles['col-12']}`}>
                                            <label className={`${styles['title-input-contact']}`}>Subject</label>
                                            <input type="text" className={`form-control ${styles['form-control']}`} id="inputSubject" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className={`col-12 ${styles['col-12']}`}>
                                            <label className={`${styles['title-input-contact']}`}>Your Message</label>
                                            <textarea className={`form-control ${styles['form-control']} ${styles['input-textarea-contact']}`} id="inputMessage"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col d-flex justify-content-center">
                                            <button type="submit" className={`btn btn-submit ${styles['btn-submit']}`}>SEND</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
