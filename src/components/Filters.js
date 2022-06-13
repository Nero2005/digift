import "./Filters.css";

export const Filters = () => {
  const filterItems = [
    "Ecommerce",
    "Popular",
    "Airtime & Electricity",
    "Gaming",
    "Electronics",
    "Clothes and Fashion",
    "Jewelry & Watches",
    "Home and furniture",
    "Sports & Entertainment",
  ];
  return (
    <div className="filters">
      <div className="filters-top">
        <h6>Filters</h6>
        <a id="reset-filters">Reset</a>
      </div>
      <div className="categories">
        <h6 className="categories-title">Categories</h6>
        {filterItems.map(item => {
          return (
            <div className="filter-item" key={item}>
              <input id="check-box" type="checkbox"></input>
              {item}
            </div>
          );
        })}
        
      </div>
    </div>
  );
};
