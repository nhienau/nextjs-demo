import { getProduct } from "@/lib/data-service";
import Head from "next/head";
import Image from "next/image";

export async function getServerSideProps({ params }) {
  const product = await getProduct(params.productId);
  if (!product) return { notFound: true };
  return { props: { product } };
}

function Product({ product }) {
  const {
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  } = product;

  return (
    <>
      <Head>
        <title>{title} - Fake Store</title>
      </Head>

      <div className="grid grid-cols-12 grid-rows-1 gap-6 my-6 lg:grid-rows-6">
        <div className="col-span-12 order-1 lg:col-span-6 lg:order-2 lg:row-span-1 flex flex-col gap-2">
          <span className="font-bold text-2xl">{title}</span>
          <span className="capitalize">{category}</span>
          <span>
            $<span className="font-semibold">{price}</span>
          </span>
        </div>
        <div className="col-span-12 order-2 lg:col-span-6 lg:order-1 lg:row-span-6 relative aspect-square">
          <Image
            src={image}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt={title}
            className="object-contain"
          />
        </div>
        <div className="col-span-12 order-3 lg:col-span-6 lg:order-3 lg:row-span-2">
          <p>{description}</p>
          <span>
            Rating: <span className="font-semibold">{rate}</span> ({count})
          </span>
        </div>
      </div>
    </>
  );
}

export default Product;
