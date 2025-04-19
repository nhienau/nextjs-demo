import { getTodo } from "@/app/_lib/data-service";
import { notFound } from "next/navigation";
import EditTodoForm from "./EditTodoForm";

export default async function Page({ params }) {
  const { todoId } = await params;

  const todo = await getTodo(todoId);

  if (!todo) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-lg font-semibold">Edit to-do</h1>
      <div className="mt-4">
        <EditTodoForm todo={todo} />
      </div>
    </div>
  );
}
