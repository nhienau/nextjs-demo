"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ pendingLabel, children }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="border border-slate-300 px-4 py-1 bg-slate-200 hover:bg-slate-300 disabled:hover:bg-slate-200 disabled:text-slate-400"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
