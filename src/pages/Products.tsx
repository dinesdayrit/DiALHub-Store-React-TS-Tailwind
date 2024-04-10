import DUMMY_PRODUCTS from "@/DummyProducts";

export default function Products() {
    return (
        <div className="flex flex-col items-center p-16 gap-8">
            <h1 className="font-bold text-4xl">PRODUCTS</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {DUMMY_PRODUCTS.map((product) => (
                <div key={product.id} className="border rounded-lg">
                    <img src={product.image} alt={product.name} className="w-[25rem] h-[25rem]  object-cover rounded-t-lg" />
                    <div className='flex flex-col items-center justify-center w-10/12 h-40'>
                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-2">Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
        </div>
        
    );
}
