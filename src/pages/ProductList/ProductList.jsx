import axios from "axios";
import { useEffect, useState } from "react";
import { Products } from "../../components";
import "./productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="productListPage">
      <div className="filters">FILTERS</div>
      <div className="products">
        {products.map((product) => {
          return (
            <Products
              key={product.id}
              title={product.title}
              mainImage={product.mainImage}
              price={product.price}
              description={product.description}
              rating={product.rating}
              category={product.categoryId.title}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
