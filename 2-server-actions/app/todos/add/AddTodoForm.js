import SubmitButton from "@/app/_components/SubmitButton";
import { addTodoAction } from "@/app/_lib/actions";

function AddTodoForm() {
  return (
    <form action={addTodoAction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          className="p-1 border border-slate-200"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="content">Content</label>
        <input
          name="content"
          id="content"
          className="p-1 border border-slate-200"
        />
      </div>
      <div>
        {/* <button className="border border-slate-300 px-4 py-1 bg-slate-200 hover:bg-slate-300">
          Save
        </button> */}
        <SubmitButton pendingLabel="Saving...">Save</SubmitButton>
      </div>
    </form>
  );
}

export default AddTodoForm;
