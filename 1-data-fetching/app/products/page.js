import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import ProductList from "./ProductList";
import Filter from "./Filter";

export const metadata = {
  title: "Products",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.category ?? "all";

  return (
    <div>
      <h1 className="font-bold text-3lg">Our products</h1>

      <div className="mb-6">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <ProductList category={filter} />
      </Suspense>
    </div>
  );
}
