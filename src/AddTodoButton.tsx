import { useContext } from "react";
import { TodoDispatchContext, TodoStateContext } from "./TodoContext";

export const AddTodoButton = () => {
  const state = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);
  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TODO",
            payload: {
              id: state.todos.length + 1,
              text: "LEARN TYPESCRIPT",
              completed: false,
            },
          })
        }
      >
        Skapa todo
      </button>
    </>
  );
};
