import React from "react";

/**
 * category is App.js useState category variable
 * setCategory is App.js useState setCategory setter
 * categories is ../data.js array of categories
 */
function CategoryFilter({ categories, category, setCategory }) {

  const showFilteredCategory = categories.map((cat) => {
    
    const className = (cat === category) ? "selected" : "";
    
    return (
      <button key={cat} className={className} onClick={() => setCategory(cat)} >
        {cat}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {showFilteredCategory}
    </div>
  );
}

export default CategoryFilter;
