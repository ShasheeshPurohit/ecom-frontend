import { useFilter } from "../../Context/FilterContext";
import "./FilterDisplay.css";

export default function FilterDisplay() {
  const { dispatch } = useFilter();
  return (
    <div className="filter-menu">
      <div className="sort-options">
        <legend>Sort by Price</legend>
        <div>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                dispatch({ type: "SORT", payload: "LOW-TO-HIGH" })
              }
            />
            Hight to low
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                dispatch({ type: "SORT", payload: "HIGH-TO-LOW" })
              }
            />
            Low to High
          </label>
        </div>
      </div>

      <div className="filter-options">
        <legend>More Filters</legend>
        <div>
          <label>
            <input
              type="checkbox"
              name="filter"
              onChange={() => dispatch({ type: "FAST-DELIVERY" })}
            />
            Fast Delivery Only
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="filter"
              onChange={() => dispatch({ type: "SHOW-IN-STOCK-ONLY" })}
            />
            In Stock only
          </label>
        </div>
      </div>
    </div>
  );
}
