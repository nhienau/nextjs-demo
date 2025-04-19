import Link from "next/link";
import { auth } from "../_lib/auth";
import SignOutButton from "./SignOutButton";

async function Navigation() {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center h-16 px-4 py-2 max-w-7xl mx-auto">
      <Link href="/">Home</Link>

      <div className="flex justify-between items-center gap-4">
        {session ? (
          <>
            <Link href="/todos">Your to-dos</Link>
            <SignOutButton />
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
