import Link from "next/link";
import { Suspense } from "react";
import { auth } from "../_lib/auth";
import { getTodos } from "../_lib/data-service";
import Spinner from "../_components/Spinner";
import TodoList from "./TodoList";

export const metadata = {
  title: "Your to-dos",
};

export default async function Page() {
  const session = await auth();
  const todos = await getTodos(session.user.userId);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">Your to-dos</h1>
        <Link
          href="/todos/add"
          className="inline-block px-6 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg"
        >
          Add
        </Link>
      </div>
      {!todos.length ? (
        <div>No to-dos</div>
      ) : (
        <Suspense fallback={<Spinner />}>
          <TodoList todos={todos} />
        </Suspense>
      )}
    </div>
  );
}
