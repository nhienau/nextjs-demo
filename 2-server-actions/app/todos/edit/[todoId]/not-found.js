import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold">This to-do could not be found.</h1>
      <Link
        href="/todos"
        className="inline-block px-6 py-3 border-slate-700 border text-lg"
      >
        Back to your to-dos
      </Link>
    </main>
  );
}
