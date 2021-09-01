import { VISIBILITY_FILTERS } from "../constants";

export interface TodoItem {
  id: number;
  content: string;
  completed: boolean;
}

export interface TodoState {
  todoItems: Array<TodoItem>;
}

export interface RootState {
  todos: TodoState;
  visibilityFilter: VisibilityFilterTypes;
}

export type VisibilityFilterTypes =
  typeof VISIBILITY_FILTERS[keyof typeof VISIBILITY_FILTERS];
