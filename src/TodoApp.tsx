import React from "react";
import TodoList from "./components/TodoList";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}
