import "./styles.css";
import RatingStars from "../Rating/RatingStars";

const RatingFilter = (props) => {
  return (
    <div className="ratingFilter">
      <h4>Rating Item</h4>
      <div className="checkbox">
        {props.ratingCategories.map((rating) => {
          return (
            <div key={rating} className="rating">
              <input
                type="checkbox"
                id={rating}
                name={rating}
                onChange={(e) => {
                  props.onCheckHandler(e);
                  console.log("event", e);
                }}
                //checked={props.ratingFilter.includes(rating)}
              />
              <label htmlFor={rating} className="ratingStars">
                <RatingStars rating={rating} />
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { RatingFilter };
