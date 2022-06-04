import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

/**
 * tasks is App.js showSeletedTasks function
 * deleteTask is App.js deleteTask function
 */
 function TaskList({tasks, deleteTask}) {

  const showFilteredTasks = tasks.map((task) => ( 
    <Task
      key={uuid()}
      text={task.text}
      category={task.category}
      deleteTask={(deleteTask)}
    />
  ));

   return <div className="tasks">{showFilteredTasks}</div>;
 }
 
 export default TaskList;