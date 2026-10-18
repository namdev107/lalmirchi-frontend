import "./NavBar.css";
import lalMirchiLogo from "../../assets/LalMirchi_Logo_Neon.png";

function Navbar() {
    return (
        <header>
            <nav className="navbar">

                <a href="/" className="logo">
                    <img
                        src={lalMirchiLogo}
                        alt="LalMirchi"
                        className="logo-image"
                    />
                </a>

                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search products..."
                    />

                    <button type="button">
                        Search
                    </button>
                </div>

                <div className="nav-links">
                    <a href="/login">Login</a>
                    <a href="/orders">Orders</a>
                    <a href="/cart">Cart (0)</a>
                </div>

            </nav>

            <div className="category-nav">
                <a href="/">Home</a>
                <a href="/electronics">Electronics</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/fashion">Fashion</a>
                <a href="/appliances">Appliances</a>
            </div>
        </header>
    );
}

export default Navbar;