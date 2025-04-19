export async function getProducts() {
  // Fake delay
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch("https://fakestoreapi.com/products");

  const data = await res.json();
  return data;
}

export async function getProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return null;
  }
}
