import '../gallerry.css'
import image1 from '../assets/christian-soler-emhq8MT8oUQ-unsplash 1.png'
import image3 from '../assets/fran-the-now-time-91y7SsvXkJE-unsplash (1) 1.png'
import image4 from '../assets/hanen-souhail-QwfgUwHoJDM-unsplash 1.png'
import image5 from '../assets/karen-willis-holmes-dOlFeKIDuRg-unsplash (1) 1.png'
import image6 from '../assets/karen-willis-holmes-McLuTG2t4UQ-unsplash (1) 1.png'
import image7 from '../assets/karen-willis-holmes-sCRYviOL93s-unsplash (1) 1.png'
import image8 from '../assets/karen-willis-holmes-wbcW51QMhs0-unsplash (1) 1.png'
import image9 from '../assets/lera-kogan-XnveTxd5Y-4-unsplash 1.png'
import image10 from '../assets/pina-messina-qQKv7r1BaRw-unsplash 1.png'
import image11 from '../assets/taylor-heery--_tUHvw09jY-unsplash (1) 1.png'
import image12 from '../assets/vladimir-yelizarov-2KTODAQ3q9Y-unsplash 1.png'

export default function GalleryComponent(){
    return(
        <>
        <section>
        <div className="contain">
            <header>
                <h1>Placeholder New Collection/Gallery</h1>
            </header>
            <div className="gallery">
                <div className="item">
                    <img src={image11} alt="Dress 1"/>
                </div>
                <div className="item">
                    <img src={image5} alt="Dress 2"/>
                </div>
                <div className="item">
                    <img src={image8} alt="Dress 3"/>
                </div>
                <div className="item">
                    <img src={image6} alt="Dress 4"/>
                </div>
                <div className="item">
                    <img src={image7} alt="Dress 5"/>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="containers">
            <header>
                <h1>Shop by category</h1>
            </header>
            <div className="categories">
                <div className="category">
                    <img src={image3} alt="Bridal"/>
                    <div className="label">Bridal</div>
                </div>
                <div className="category">
                    <img src={image12} alt="Ready to Wear"/>
                    <div className="label">Ready to Wear</div>
                </div>
                <div className="category">
                    <img src={image10} alt="Custom/Bespoke"/>
                    <div className="label">Custom/Bespoke</div>
                </div>
            </div>
        </div>
    </section>
    <section className="recommendations">
        <h2>You might like</h2>
        <div className="items">
            <div className="item1">
                <img src={image9} alt="Noelia"/>
                <div className="info">
                    <button className="quick-buy">Quick Buy</button>
                    <h3>Noelia</h3>
                    <p>Turquoise satin halter dress</p>
                    <p>$175.00</p>
                </div>
            </div>
            <div className="item1">
                <img src={image4} alt="Noelia"/>
                <div className="info">
                    <button className="quick-buy">Quick Buy</button>
                    <h3>Noelia</h3>
                    <p>Turquoise satin halter dress</p>
                    <p>$175.00</p>
                </div>
            </div>
            <div className="item1">
                <img src={image1} alt="Noelia"/>
                <div className="info">
                    <button className="quick-buy">Quick Buy</button>
                    <h3>Noelia</h3>
                    <p>Turquoise satin halter dress</p>
                    <p>$175.00</p>
                </div>
            </div>
            <div className="item1">
                <img src={image4} alt="Noelia"/>
                <div className="info">
                    <button className="quick-buy">Quick Buy</button>
                    <h3>Noelia</h3>
                    <p>Turquoise satin halter dress</p>
                    <p>$175.00</p>
                </div>
            </div>
            <div className="item1">
                <img src={image9} alt="Noelia"/>
                <div className="info">
                    <button className="quick-buy">Quick Buy</button>
                    <h3>Noelia</h3>
                    <p>Turquoise satin halter dress</p>
                    <p>$175.00</p>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}