import { useState, } from "react";

export const useTasks = ({tasks, setTasks}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            done: !task.done,
          };
        return task;
      })
    );
  };

  const renameTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        rename: false,
      }))
    );

    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            rename: true,
            done: false,
          };
        return task;
      })
    );
    setNewTaskContent("");
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const cancelRenameTask = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            rename: false,
          };
        return task;
      })
    );
    setNewTaskContent("");
  };

  const changeTaskContent = (id) => {
    setNewTaskContent(newTaskContent);

    if (newTaskContent.trim() === "") return cancelRenameTask(id);

    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id)
          return {
            ...task,
            content: newTaskContent,
            rename: false,
          };
        return task;
      })
    );
    setNewTaskContent("");
  };

  const finishAllTasks = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  return {
    tasks,
    newTaskContent,
    addNewTask,
    toggleTaskDone,
    renameTask,
    removeTask,
    cancelRenameTask,
    setNewTaskContent,
    changeTaskContent,
    finishAllTasks,
  };
};
