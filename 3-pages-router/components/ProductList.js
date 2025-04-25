import ProductCard from "./ProductCard";
import { useRouter } from "next/router";

function ProductList({ products }) {
  const router = useRouter();
  const category = router.query.category ?? "all";

  if (!products.length) return null;

  let displayedProducts;
  if (category === "all") displayedProducts = products;
  else {
    displayedProducts = products.filter(
      (product) => product.category === category
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      {displayedProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
