import ProductList from "@/sections/product-list";

async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if(!response.ok) {
            throw new Error("Failed to fetch data dari API");
        }

        return response.json(); 
        
    } catch (error) {
        console.log(error);
    }
}

export default async function Page() {
  const products = await getProducts();

  return (
    <>
      <div className="bg-slate-100 min-h-screen">
        <ProductList products={products} />
      </div>
    </>
  );
}
