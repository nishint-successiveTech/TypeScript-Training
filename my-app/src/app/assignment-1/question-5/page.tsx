import TaskList from "@/components/assignment-1/TaskList";
import React from "react";

const page = () => {
  const tasks: string[] = ["CODE", "COFFEE", "CODE"];
  return (
    <div>
      <center>
        <h1>
          5.Create a functional component named TaskList that accepts an array
          of task names as a prop. Use the map function to render each task name
          as a list item. Import and render the TaskList component in the App
          component with an array of tasks.
        </h1>
        <br></br>
        <TaskList task={tasks} />
      </center>
    </div>
  );
};

export default page;
