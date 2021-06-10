import { useEffect, useRef, useState } from "react";
import { ToggleTaskDoneButton } from "./Buttons/ToggleTaskDoneButton"
import { RenameTaskButton } from "./Buttons/RenameTaskButton"
import { CancelRenameTaskButton } from "./Buttons/CancelRenameTaskButton";
import { ConfirmTaskContentChangeButton } from "./Buttons/ConfirmTaskContentChangeButton";
import { TaskContent } from "./Body/TaskContent";
import { RemoveTaskButton } from "./Buttons/RemoveTaskButton";
import { TaskDoneCondition } from "./Body/TaskDoneCondition";
import { RenameTaskCondition } from "./Body/RenameTaskCondition";
import "./style.css";


export const Tasks = ({ tasks, hideDone, setTasks }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputFocus = useRef(null);

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  });

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          done: !task.done
        }
      return task;
    }));
  };

  const renameTask = (id) => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      rename: false,
    })));

    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          rename: true,
        }
      return task;
    }));
    setNewTaskContent("");
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const cancelRenameTask = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          rename: false,
        }
      return task;
    }));
    setNewTaskContent("");
  };

  const changeTaskContent = (id) => {

    setNewTaskContent(newTaskContent);

    if (newTaskContent.trim() === "") return cancelRenameTask(id);

    setTasks(tasks => tasks.map(task => {
      if (task.id === id)
        return {
          ...task,
          content: newTaskContent,
          rename: false,
        }
      console.log(newTaskContent);
      return task;
    }));
    setNewTaskContent("");
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ul className="taskList">
      {tasks.map(task => (
        <li
          key={task.id}
        >
          <TaskDoneCondition
            task={task}
            hideDone={hideDone}
          >
            <ToggleTaskDoneButton
              toggleTaskDone={toggleTaskDone}
              task={task}
            />
            <TaskContent
              task={task}
            />
            <RenameTaskButton
              task={task}
              renameTask={renameTask}
            />
            <RemoveTaskButton
              task={task}
              removeTask={removeTask}
            />
          </TaskDoneCondition>
          <RenameTaskCondition
            task={task}
          >
            <form className="taskList__rename" onSubmit={onFormSubmit}>
              <input
                value={newTaskContent}
                ref={element => { inputFocus.current = element }}
                className="taskList__input" type="text"
                placeholder=""
                onChange={({ target }) => setNewTaskContent(target.value)}
              />
              <ConfirmTaskContentChangeButton
                task={task}
                changeTaskContent={changeTaskContent}
              />
              <CancelRenameTaskButton
                task={task}
                cancelRenameTask={cancelRenameTask}
              />
            </form>
          </RenameTaskCondition>
        </li>
      ))}
    </ul>
  );
};
