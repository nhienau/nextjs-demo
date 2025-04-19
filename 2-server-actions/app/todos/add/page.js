import AddTodoForm from "./AddTodoForm";

export default function Page() {
  return (
    <div>
      <h1 className="text-lg font-semibold">Add a new to-do</h1>
      <div className="mt-4">
        <AddTodoForm />
      </div>
    </div>
  );
}
