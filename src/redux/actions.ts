import { ActionTypes } from "./actionTypes";
import { TodoItem, VisibilityFilterTypes } from "./types";

type SetTodosAction = {
  type: ActionTypes.SET_TODOS;
  payload: { todos: TodoItem[] };
};

export const setTodos = (todos: TodoItem[]): SetTodosAction => ({
  type: ActionTypes.SET_TODOS,
  payload: { todos },
});

type SetFilterAction = {
  type: ActionTypes.SET_FILTER;
  payload: {
    filter: VisibilityFilterTypes;
  };
};

export const setFilter = (filter: VisibilityFilterTypes): SetFilterAction => ({
  type: ActionTypes.SET_FILTER,
  payload: { filter },
});

export type TodoActions = SetTodosAction | SetFilterAction;
