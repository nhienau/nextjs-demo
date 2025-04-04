import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="products" className="hover:underline">
            Browse products
          </Link>
        </li>
      </ul>
    </div>
  );
}
