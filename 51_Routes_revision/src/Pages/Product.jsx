import { useNavigate } from "react-router-dom";

const Product = () => {
  const dummyProducts = [
    {
      id: 1,
      name: "Headphone",
    },
    {
      id: 2,
      name: "Mobile",
    },
    {
      id: 3,
      name: "Laptop",
    },
    {
      id: 4,
      name: "Tablet",
    },
    {
      id: 5,
      name: "Watch",
    },
  ];

  const navigate = useNavigate();


  const handleClick = (name) => {
    navigate(`/product/${name}`)
  };

  const renderProducts = () => {
    return dummyProducts.map((product) => {
      return (
        <li key={product.id}>
          <div className="product">
            <h3>{product.name}</h3>
            <button onClick={() => handleClick(product.name)}>show details</button>
          </div>
        </li>
      );
    });
  };
  return (
    <>
      <h1>Product Page</h1>
      <div>{renderProducts()}</div>
    </>
  );
};

export default Product;
