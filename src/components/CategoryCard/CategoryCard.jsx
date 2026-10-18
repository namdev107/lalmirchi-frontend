import "./CategoryCard.css";

function CategoryCard({ name, icon }) {
    return(
        <div className="category-card">
            <span className="category-icon">
                {icon}
            </span>
            <h3>{name}</h3>
        </div>
    );
}

export default CategoryCard;