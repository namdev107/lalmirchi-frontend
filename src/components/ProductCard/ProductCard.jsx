import "./ProductCard.css";

function ProductCard({ product }){
    return(
        <article className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />

            <div className="product-info">
                <h3>{product.name}</h3>

                <p className="product-description">
                    {product.description}
                </p>

                <p className="product-rating">
                    ★ {product.rating}
                </p>

                <p className="product-price">
                    ₹{product.price.toLocaleString("en-IN")}
                </p>

                <button
                    type="button"
                    className="add-cart-btn"
                >
                    Add to Cart
                </button>
            </div>
        </article>
    );
}
export default ProductCard;