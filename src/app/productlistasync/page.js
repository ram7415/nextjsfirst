async function ProductList() {
  const response = await fetch("https://dummyjson.com/products");
  const json = await response.json();
  console.log(json);
  return json.products;
}

export default async function Page() {
  let product = await ProductList();
  return (
    <div>
      <h1>productasync</h1>
      {product.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h1>{item.price}</h1>
          <h1>{item.description}</h1>
        </div>
      ))}
    </div>
  );
}
