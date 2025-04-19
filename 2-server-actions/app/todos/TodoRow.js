// "use client";

import Link from "next/link";
import DeleteTodo from "./DeleteTodo";
import DeleteTodoOptimistic from "./DeleteTodoOptimistic";
// import { useTransition } from "react";

function TodoRow({ todo, onDelete }) {
  // const [isPending, startTransition] = useTransition();
  const { id, title, content, created_at } = todo;

  // function handleDeleteOptimistic() {
  //   if (confirm("Delete?")) {
  //     startTransition(() => onDeleteTodo(id));
  //   }
  // }

  return (
    <div className="table-row">
      <div className="table-cell py-1">{title}</div>
      <div className="table-cell py-1">{content}</div>
      <div className="table-cell py-1">{created_at}</div>
      <div className="table-cell py-1">
        <Link
          href={`/todos/edit/${id}`}
          className="inline-block px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-lg"
        >
          Edit
        </Link>
        <DeleteTodo id={id} />
        <DeleteTodoOptimistic id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default TodoRow;
