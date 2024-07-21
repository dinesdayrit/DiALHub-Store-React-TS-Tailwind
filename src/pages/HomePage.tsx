import FeaturedProducts from "../components/homepage/FeaturedProducts";
import Banner from "@/components/homepage/Banner";
import Brands from "@/components/homepage/Brands";

export default function HomePage() {
  return (
    <div>
      <div>
        <div className="max-h-[43rem] outline">
          <Banner />
        </div>
        <Brands />
        <FeaturedProducts />
      </div>
    </div>
  );
}
