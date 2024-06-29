import { FC } from 'react';
import { Link } from 'react-router-dom';
import DUMMY_PRODUCTS from "@/DummyProducts";

const FeaturedProducts: FC = () => {


    // Get the first three products
    const featuredProducts = DUMMY_PRODUCTS.slice(0, 3);

    return (
        <div className="flex flex-col items-center mt-16 mb-16 justify-center">
            <h1 className="mb-4 text-3xl md:text-5xl">Featured Products...</h1>

            <div className="flex flex-col justify-center items-center mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
                    {featuredProducts.map((item) => (
                        <div key={item.id} className="flex flex-col items-center"> 
                            <img src={item.image} alt={item.name} width={300} className='h-1/2 w-10/12 rounded-lg mb-4' /> 

                            <div className='flex flex-col items-center justify-center w-10/12 h-40'>
                                <h2 className="text-center font-bold">{item.name}</h2>
                                <p className="text-center">{item.description}</p>
                                <p className="text-center">Price: ${item.price.toFixed(2)}</p>
                                <button className='bg-green-500 hover:bg-green-500/90 p-3 rounded-lg text-white hover:font-medium'>Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
                <Link className="hover:text-green-500 hover:font-medium" to="products">More Products &gt;&gt;</Link>   
            </div>
        </div>
    );
};

export default FeaturedProducts;
