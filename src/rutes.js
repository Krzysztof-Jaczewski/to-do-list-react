export const toTasks = () => "/zadania";
export const toAuthor = () => "/author";
export const toTask = ({ id } = { id: ":id" }) => `${toTasks()}/${id}`;
