"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(e) {
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    params.set("category", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <select name="filter" className="p-2" onChange={handleChange}>
      <option value="all">All</option>
      <option value="men's clothing">Men&apos;s Clothing</option>
      <option value="jewelery">Jewelery</option>
      <option value="electronics">Electronics</option>
      <option value="women's clothing">Women&apos;s clothing</option>
    </select>
  );
}

export default Filter;
