import { useContext } from "react";
import { TodoStateContext } from "./TodoContext";

export const TodoList = () => {
  const state = useContext(TodoStateContext);
  return (
    <>
      {state.todos.length > 0 && (
        <>
          <h3>Todos:</h3>
          {state.todos.map((todo) => (
            <div key={todo.id}>
              Title: {todo.text} | Completed: {todo.completed + ""}
            </div>
          ))}
        </>
      )}
    </>
  );
};
