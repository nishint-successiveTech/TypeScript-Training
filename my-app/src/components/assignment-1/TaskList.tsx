import React from "react";
interface taskDataType {
  task: string[];
}
const TaskList = ({ task }: taskDataType) => {
  return (
    <div>
      {task.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default TaskList;
