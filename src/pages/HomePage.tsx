import Products from '../components/homepage/Products'
import Banner from '../components/homepage/Banner'
import Footer from '../components/homepage/Footer'

export default function HomePage () {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Banner />
                <Products />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
