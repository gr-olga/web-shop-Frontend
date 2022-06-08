import "./styless.css";
import { BsCartDash } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";

const Products = (props) => {
  return (
    <div className="productComponent">
      <div className="productImage">
        <img
          src={props.mainImage}
          alt={props.title}
          width="50"
          height="60"
        ></img>
      </div>
      <div className="productInfo">
        <div className="productTitle">{props.title}</div>
        <div className="priceAndRating">
          <span className="price"> € {props.price}</span>{" "}
          <span className="rating">{props.rating}</span>
        </div>
        <div className="description">{props.description}</div>
        <div className="icons">
          <BsCartDash className="cart" />
          <AiOutlineHeart className="heart" />
          <AiOutlineZoomIn className="zoom" />
        </div>
      </div>
    </div>
  );
};

export { Products };
