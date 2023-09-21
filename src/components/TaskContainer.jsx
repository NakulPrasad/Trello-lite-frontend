import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { tasksJSON } from "../assets/tasks.js";

const TaskContainer = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedTasks = JSON.parse(tasksJSON);
        setTasks(parsedTasks);
        console.log(parsedTasks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;
  };

  return (
    <div className="container">
      {/* {Object.entries(tasks).map((task) => console.log(task))}
      log */}

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="pending__wrapper">
          <h3>Pending Tasks</h3>
          <div className="pending__items">
            <p>Test to noffffffffffffffffftification center</p>
            <p className="comment">comment</p>
          </div>
        </div>
        <div className="ongoing__wrapper">
          <h3>Ongoing Tasks</h3>
          <div className="ongoing__items">
            <p>Test to noffffffffffffffffftification center</p>
            <p className="comment">comment</p>
          </div>
        </div>
        <div className="completed__wrapper">
          <h3>Completed Tasks</h3>
          <div className="completed__items">
            <p>Test to noffffffffffffffffftification center</p>
            <p className="comment">comment</p>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default TaskContainer;
