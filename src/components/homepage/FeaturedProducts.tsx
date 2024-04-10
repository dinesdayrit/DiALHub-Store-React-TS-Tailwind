import { FC } from 'react';
import DUMMY_PRODUCTS from "@/DummyProducts";

const FeaturedProducts: FC = () => {
    // Get the first three products
    const featuredProducts = DUMMY_PRODUCTS.slice(0, 3);

    return (
        <div className="flex flex-col items-center mt-16 mb-16 justify-center">
            <h1 className="mb-4 text-5xl">Featured Products...</h1>

            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProducts.map((item) => (
                        <div key={item.id} className="flex flex-col items-center "> 
                            <img src={item.image} alt={item.name} width={300} className='h-1/2 w-10/12 rounded-lg' /> 
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>Price: ${item.price.toFixed(2)}</p>
                            <button className='bg-green-500 p-3 rounded-lg text-white'>Add to cart</button>
                            
                        </div>
                    ))}
                </div>
                <button className="hover:text-green-500">More Products &gt;&gt;</button>   
            </div>
        </div>
    );
};

export default FeaturedProducts;
