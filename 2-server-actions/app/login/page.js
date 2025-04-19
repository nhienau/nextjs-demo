import { signInAction } from "../_lib/actions";

export const metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <form action={signInAction}>
      <button className="px-4 py-3 bg-slate-200 hover:bg-slate-300">
        Sign in with Google
      </button>
    </form>
  );
}
