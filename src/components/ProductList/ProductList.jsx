import ProductCard from '../Productcard/Productcard';
import './ProductList.css';

const ProductList = ({ plans }) => {
  return (
    <div className="product-list">
      {plans.map((plan) => (
        <ProductCard
          key={plan.id}
          name={plan.name}
          price={plan.price}
          period={plan.period}
          features={plan.features}
          buttonText={plan.buttonText}
          variant={plan.variant}
        />
      ))}
    </div>
  );
};

export default ProductList;