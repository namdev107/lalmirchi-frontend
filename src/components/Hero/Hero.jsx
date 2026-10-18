import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">

                <span className="hero-label">
                    Special Shopping Offers
                </span>

                <h1>
                    Discover Amazing Deals On LalMirchi
                </h1>

                <p>
                    Shop electronics, fashion,
                    mobiles and more at
                    unbeatable prices.
                </p>

                <button className="shop-btn">
                    Shop Now
                </button>

            </div>
        </section>
    );
}

export default Hero;