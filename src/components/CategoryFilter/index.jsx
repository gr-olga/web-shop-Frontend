import "./styles.css";

const CategoryFilter = (props) => {
  return (
    <div className="categoryFilter">
      <h4>Categories</h4>
      <div>
        {props.uniqueCategories.map((category) => {
          return (
            <div key={category + "1"} className="categories">
              <input
                type="checkbox"
                id={category}
                name={category}
                onChange={(e) => props.onCheckHandler(e)}
                checked={props.categoryFilter.includes(category)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CategoryFilter };
