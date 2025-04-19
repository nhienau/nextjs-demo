"use client";

import { useOptimistic } from "react";
import TodoRow from "./TodoRow";
import { deleteTodoAction } from "../_lib/actions";

function TodoList({ todos }) {
  const [optimisticTodos, deleteOptimisticTodo] = useOptimistic(
    todos,
    (todos, todoId) => {
      return todos.filter((todo) => todo.id !== todoId);
    }
  );

  async function onDeleteTodo(id) {
    deleteOptimisticTodo(id);
    await deleteTodoAction(id);
  }

  return (
    <div className="table w-full">
      <div className="table-header-group">
        <div className="table-row">
          <div className="table-cell text-left font-semibold">Title</div>
          <div className="table-cell text-left font-semibold">Content</div>
          <div className="table-cell text-left font-semibold">Date created</div>
          <div className="table-cell text-left font-semibold"></div>
        </div>
      </div>
      <div className="table-row-group">
        {optimisticTodos.map((todo) => (
          <TodoRow todo={todo} key={todo.id} onDelete={onDeleteTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
