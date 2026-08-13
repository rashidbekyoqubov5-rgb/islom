import './Productcard.css';

const ProductCard = ({ title, price, features, buttonText, variant }) => {
  return (
    <article className="product-card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="price-row">
          <span className="price-value">{price}</span>
          <span className="price-period">/ mo</span>
        </div>
 
        <ul className="card-features">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <button type="button" className={`card-button ${variant}`}>
          {buttonText}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;