import { useReducer } from "react";
import "./App.css";
import { TodoDispatchContext, TodoStateContext } from "./TodoContext";
import { TodoList } from "./TodoList";
import { AddTodoButton } from "./AddTodoButton";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type State = {
  todos: Todo[];
};

export type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: number };

const initialState: State = {
  todos: [],
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          return {
            ...todo,
            completed:
              todo.id === action.payload ? !todo.completed : todo.completed,
          };
        }),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
          <TodoList />
          <AddTodoButton />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </>
  );
}

export default App;
