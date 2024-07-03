import FeaturedProducts from '../components/homepage/FeaturedProducts'
import Banner from '@/components/homepage/Banner'
import Brands from '@/components/homepage/Brands'


export default function HomePage () {
    return (
        <div>
            <div>
                <Banner />
                <Brands />
                <FeaturedProducts />
            </div>
        </div>
    )
}
