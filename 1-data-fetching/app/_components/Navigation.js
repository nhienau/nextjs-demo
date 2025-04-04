import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex justify-between items-center h-16 px-4 py-2 max-w-7xl mx-auto">
      <Link href="/">Home</Link>
      <div className="flex justify-between items-center gap-4">
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navigation;
