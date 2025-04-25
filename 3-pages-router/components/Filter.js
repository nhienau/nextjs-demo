import { useRouter } from "next/router";

function Filter() {
  const router = useRouter();
  const category = router.query.category ?? "all";

  function handleChange(e) {
    const value = e.target.value;
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, category: value },
      },
      undefined,
      { scroll: false }
    );
  }

  return (
    <select
      name="filter"
      className="p-2"
      onChange={handleChange}
      value={category}
    >
      <option value="all">All</option>
      <option value="men's clothing">Men&apos;s Clothing</option>
      <option value="jewelery">Jewelery</option>
      <option value="electronics">Electronics</option>
      <option value="women's clothing">Women&apos;s clothing</option>
    </select>
  );
}

export default Filter;
