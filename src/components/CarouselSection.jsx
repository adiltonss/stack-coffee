import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import item1 from '../assets/images/item1.jpg'
import item2 from '../assets/images/item2.jpg'
import item3 from '../assets/images/item3.jpg'
import item4 from '../assets/images/item4.jpg'

export default function CarouselSection(){
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1
        }
    };
    
    return(
        <section className="carousel-section">
            <h2 className='car-title'>Para todo os gostos</h2>
            <Carousel responsive={responsive} className="carousel-cont">
                <div className="item">
                    <img src={item1} alt="" />
                    <h2>Espresso Puro</h2>
                    <p>Um clássico intenso para os amantes do café. Profundo, aromático e revigorante.</p>
                </div>
                <div className="item">
                    <img src={item2} alt="" />
                    <h2>Americano Suave</h2>
                    <p>Café puro, suave e encorpado, experiência irresistível em cada gole.</p>
                </div>
                <div className="item">
                    <img src={item3} alt="" />
                    <h2>Mocha Especial:</h2>
                    <p>Espresso rico misturado com chocolate decadente e leite cremoso. Uma experiência indulgente.</p>
                </div>
                <div className="item">
                    <img src={item4} alt="" />
                    <h2>Caramel Espresso</h2>
                    <p>Espresso encorpado, misturado com caramelo dourado e leite cremoso. Uma experiência indulgente e doce.</p>
                </div>
            </Carousel>
        </section>
    )
}