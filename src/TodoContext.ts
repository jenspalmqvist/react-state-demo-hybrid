import { createContext } from "react";
import { Action, State } from "./App";

const state: State = { todos: [] };
const dispatch: React.Dispatch<Action> = () => null;

export const TodoStateContext = createContext(state);
export const TodoDispatchContext = createContext(dispatch);
