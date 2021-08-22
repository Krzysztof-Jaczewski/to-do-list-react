import axios from "axios";

export const getExampleTasks = async () => {
  const response = await axios.get("/toDoList-react/exampleTasks.json");
  console.log(response.data);
  return await response.data;
};
