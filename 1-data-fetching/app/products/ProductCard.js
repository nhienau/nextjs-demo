import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const { id, title, price, image } = product;
  return (
    <div className="overflow-hidden border border-slate-300 rounded-lg flex flex-col">
      <div className="flex-1 relative max-h-[20rem] aspect-square">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={title}
          className="object-contain"
        />
      </div>
      <div className="p-4 flex flex-col h-full gap-2">
        <div className="flex-1">
          <span className="line-clamp-2 text-lg font-bold block">{title}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold">${price}</span>
          <Link
            href={`/products/${id}`}
            className="inline-block bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-2 border border-slate-300"
          >
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
