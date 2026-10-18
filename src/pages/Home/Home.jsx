import Hero from "../../components/Hero/Hero";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import ProductCard from "../../components/ProductCard/ProductCard";

import { categories } from "../../data/categories";
import { products } from "../../data/products";

import "./Home.css";

function Home() {
    return (
        <main>
            <Hero />

            <section className="home-section">
                <h2>Shop by Category</h2>

                <div className="category-grid">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            name={category.name}
                            icon={category.icon}
                        />
                    ))}
                </div>
            </section>

            <section className="home-section">
                <h2>Featured Products</h2>

                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Home;