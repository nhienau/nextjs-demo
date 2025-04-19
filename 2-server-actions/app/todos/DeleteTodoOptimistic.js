"use client";

import { useTransition } from "react";

function DeleteTodoOptimistic({ id, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleClick() {
    if (confirm("Delete?")) {
      startTransition(() => onDelete(id));
    }
  }
  return (
    <button
      onClick={handleClick}
      className="inline-block px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-lg"
      disabled={isPending}
    >
      Delete
    </button>
  );
}

export default DeleteTodoOptimistic;
