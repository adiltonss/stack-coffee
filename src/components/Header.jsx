import logo from "../assets/images/logo.png"
import menuIcon from "../assets/images/menu-burger.svg"


export default function Header(){
    return(
        <header>
            <nav>
                <div className="logo-cont"><img src={logo} alt="" /></div>
                <ul>
                    <li><a href="#">Tipos</a></li>
                    <li><a href="#">Coleção</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
            <div className="hero-section">
                <div className="row coffee-pot">
                </div>
                <div className="row">
                    <h1>A vida começa depois do café!</h1>
                    <p> É mais do que uma simples bebida, é um ritual, um abraço caloroso de sabor e energia que transforma os momentos cotidianos em memórias especiais</p>
                    <a className="btn" href="#">Saiba Mais</a>
                </div>
            </div>
        </header>
    )
}