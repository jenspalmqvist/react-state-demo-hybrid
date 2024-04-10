import { useAppSelector } from "./hooks";

export const TodoListRedux = () => {
  const state = useAppSelector((state) => state.todo);
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
