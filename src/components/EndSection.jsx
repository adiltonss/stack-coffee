import instgramLogo from "../assets/images/instagram.svg" 
import twitterLogo from "../assets/images/twitter-alt-circle.svg" 
import fbLogo from "../assets/images/facebook.svg" 
import locationIcon from "../assets/images/marker.svg"

export default function EndSection(){
    return(
        <section className="end-section">
            <div className="text-cont">
                <h2>Estamos te esperando!</h2>
                <p>Venha, descubra o encanto da nossa cafeteria, e permita-nos mostrar que a vida não apenas começa depois do café - ela ganha vida aqui. Esperamos vê-lo em breve, pronto para compartilhar risadas, histórias e, é claro, uma excelente xícara de café.</p>
                <p className="location"><span><img src={locationIcon} alt="" /></span> 221B Baker Street, London</p>
                <div className="social-icons">
                    <h3>Siga-nos nas redes sociais:</h3>
                    <div>
                        <a href="#"><img src={instgramLogo} alt="" /></a>
                        <a href="#"><img src={twitterLogo} alt="" /></a>
                        <a href="#"><img src={fbLogo} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="img-cont"></div>
        </section>
    )
}