import React, { useState } from "react";

/**
 * onTaskFormSubmit is App.js addTask function
 * categories is ../data.js array of categories
 */
function NewTaskForm({ onTaskFormSubmit, categories}) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(event) {

    event.preventDefault();
    if ((text !== "") && (category !== "All")){
      onTaskFormSubmit({ text, category });
      resetState();
    }
  }

  function resetState(){
    setText("");
    setCategory("All");
  }

  function handleInputChange(event){
    setText(event.target.value);
  }

  function handleCategoryChange(event){
    setCategory(event.target.value);
  }

  const showAllCategories = categories.map((category) => 
            (category !== "All") ? ((<option key={category}>{category}</option>)) : null)             

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" value={text} onChange={handleInputChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {showAllCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;