import ProductList from "@/components/ProductList";
import { getProducts } from "@/lib/data-service";
import Head from "next/head";

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: {
      products,
    },
    // revalidate: 3600
  };
}

function Products({ products }) {
  return (
    <>
      <Head>
        <title>Products - Fake Store</title>
      </Head>
      <div>
        <h1 className="font-bold text-3lg">Our products</h1>
        {/* Filter */}
        <ProductList products={products} />
      </div>
    </>
  );
}

export default Products;
