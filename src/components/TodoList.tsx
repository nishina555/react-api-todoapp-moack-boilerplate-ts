import React, { useEffect } from "react";
import Todo from "./Todo";
import { setTodos, TodoActions } from "../redux/actions";
import { RootState, VisibilityFilterTypes } from "../redux/types";
import { connect } from "react-redux";
import { TodoItem, TodoState } from "../redux/types";
import { getTodosByVisibilityFilter } from "../redux/selectors";

type TodoListProps = {
  todos: TodoState;
  visibilityFilter: VisibilityFilterTypes;
  setTodos: (todos: Array<TodoItem>) => TodoActions;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  visibilityFilter,
}) => {
  useEffect(() => {
    const data: Array<TodoItem> = [
      { id: 1, content: "do something", completed: false },
      { id: 2, content: "go somewhere", completed: true },
    ];
    setTodos(data);
  }, [setTodos]);
  const visibleTodos: TodoItem[] = getTodosByVisibilityFilter(
    todos,
    visibilityFilter
  );
  return (
    <ul className="todo-list">
      {visibleTodos && visibleTodos.length
        ? visibleTodos.map((todo: TodoItem) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

const mapStateToProps = (state: RootState) => {
  const todos = state.todos;
  const visibilityFilter = state.visibilityFilter;
  return { todos, visibilityFilter };
};
export default connect(mapStateToProps, { setTodos })(TodoList);
