import axios from "axios";
import { useEffect, useState } from "react";
import { Products, CategoryFilter } from "../../components";
import "./productList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/products");
      setProducts(response.data);
      //  console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onCheckHandler = (e) => {
    if (categoryFilter.includes(e.target.name)) {
      const newFilter = categoryFilter.filter((c) => c !== e.target.name);
      setCategoryFilter(newFilter);
    } else {
      setCategoryFilter([...categoryFilter, e.target.name]);
    }
  };

  const categories = products.map((product) => {
    return product.category.title;
  });
  const uniqueCategories = [...new Set(categories)];

  //console.log("categoryFilter", categoryFilter);

  const filteredProducts = products.filter(
    (product) =>
      categoryFilter.length === 0 ||
      categoryFilter.includes(product.category.title)
  );
  //console.log("filteredProducts", filteredProducts);

  return (
    <div className="productListPage">
      <div className="filters">
        <CategoryFilter
          uniqueCategories={uniqueCategories}
          onCheckHandler={onCheckHandler}
          categoryFilter={categoryFilter}
        />
      </div>
      <div className="products">
        {filteredProducts.map((product) => {
          return (
            <Link to={`/details/${product.id}`} key={product.id}>
              {" "}
              <Products
                title={product.title}
                mainImage={product.mainImage}
                price={product.price}
                description={product.description}
                rating={product.rating}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
