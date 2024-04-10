import { useAppDispatch } from "./hooks";
import { addTodo } from "./todoSlice";

export const AddTodoButtonRedux = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button onClick={() => dispatch(addTodo("LEARN TYPESCRIPT WITH REDUX"))}>
        Skapa todo
      </button>
    </>
  );
};
