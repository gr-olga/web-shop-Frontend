import axios from "axios";
import { useEffect, useState } from "react";
import { Products, CategoryFilter, RatingFilter } from "../../components";
import "./productList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState([]);

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

  //Filter by category

  const categories = products.map((product) => {
    return product.category.title;
  });
  const uniqueCategories = [...new Set(categories)];

  const filteredProductsbyCategory = products.filter(
    (product) =>
      categoryFilter.length === 0 ||
      categoryFilter.includes(product.category.title)
  );
  const onCheckCategoryHandler = (e) => {
    if (categoryFilter.includes(e.target.name)) {
      const newFilter = categoryFilter.filter((c) => c !== e.target.name);
      setCategoryFilter(newFilter);
    } else {
      setCategoryFilter([...categoryFilter, e.target.name]);
    }
  };

  // FIlter by rating

  const rating = products.map((product) => {
    return Math.round(product.rating);
  });
  const ratingCategories = [...new Set(rating)].sort((a, b) => b - a);

  const filteredProductsbyCategoryAndRating = filteredProductsbyCategory.filter(
    (product) => {
      return (
        ratingFilter.length === 0 ||
        ratingFilter.includes(Math.round(product.rating).toString())
      );
    }
  );

  const onCheckRatingHandler = (e) => {
    if (ratingFilter.includes(e.target.name)) {
      const newFilter = ratingFilter.filter((c) => c !== e.target.name);
      setRatingFilter(newFilter);
    } else {
      setRatingFilter([...ratingFilter, e.target.name]);
    }
  };

  return (
    <div className="productListPage">
      <div className="filters">
        <div>
          <CategoryFilter
            uniqueCategories={uniqueCategories}
            onCheckHandler={onCheckCategoryHandler}
            categoryFilter={categoryFilter}
          />
        </div>
        <div>
          <RatingFilter
            ratingCategories={ratingCategories}
            onCheckHandler={onCheckRatingHandler}
            ratingFilter={ratingFilter}
          />
        </div>
      </div>
      <div className="products">
        {filteredProductsbyCategoryAndRating.map((product) => {
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
