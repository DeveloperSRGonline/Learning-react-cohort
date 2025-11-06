import { useNavigate } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const dummyProducts = [
    {
      id: 1,
      name: "Laptop Pro",
    },
    {
      id: 2,
      name: "Wireless Mouse X",
    },
    {
      id: 3,
      name: '4K Monitor 27"',
    },
  ];
  const navigate = useNavigate();


  const NavigateHandler = (name) => {
    navigate(`/products/detail/${name}`);
  }

  const renderProducts = () => {
    return dummyProducts.map((product) => (
      <li key={product.id} className="product-item">
        <h3>{product.name}</h3>
        <button onClick={() => NavigateHandler(product.name)}>Add to Cart</button>
      </li>
    ));
  };

  return (
    <div className="Products">
      <h2>Products Collection</h2>
      {dummyProducts.length > 0 ? (
        <ul className="product-list">{renderProducts()}</ul>
      ) : (
        <p className="no-products">No products available at the moment.</p>
      )}
    </div>
  );
};

export default Products;
