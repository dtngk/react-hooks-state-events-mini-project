import React from "react";
/**
 * text is TaskList task text
 * category is TaskList category
 * deleteTask is App.js deleteTask function using a callback from TaskList.js
 */
function Task({ text, category, deleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => deleteTask(text)} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;