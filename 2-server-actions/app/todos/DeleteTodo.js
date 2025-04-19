"use client";

import { deleteTodoAction } from "../_lib/actions";

function DeleteTodo({ id }) {
  function handleClick() {
    if (confirm("Delete?")) {
      deleteTodoAction(id);
    }
  }
  return (
    <button
      onClick={handleClick}
      className="inline-block px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-lg"
    >
      Delete
    </button>
  );
}

export default DeleteTodo;
