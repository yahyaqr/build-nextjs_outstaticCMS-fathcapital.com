import styles from './bg.module.scss'

const image = {
    about: "img/bg-about-us-crop.png",
    contact: "img/bg-contact-crop.png"
}

export default function Bg(props) {
    let src;

    switch (props.page) {
        case "contact":
            src = image.contact;
            break;
        case "about":
            src = image.about;
            break;
        default:
            break;
    }

    return (
        <div className={`container-fluid ${styles['img-main']}`}>
            <img src={src} alt="page-background" />
        </div>
    )
}
