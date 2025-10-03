import style from "./footer.module.css"

export const Footer = () => {
    return(
        <div className={style.body}>
            <img src="/logoBranca.png" className={style.logo}/>
             <a href="https://www.instagram.com/sieh.pb?igsh=MXJ1MzlzOWNxM2EzNQ==" target="_blank"><img src="https://www.edigitalagency.com.au/wp-content/uploads/Instagram-logo-white-PNG-large-size.png" className={style.logoIG}/></a>
        </div>
    )
}