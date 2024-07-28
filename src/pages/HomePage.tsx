import FeaturedProducts from "../components/homepage/FeaturedProducts";
import Brands from "@/components/homepage/Brands";
import Hero from "@/components/homepage/Hero";

export default function HomePage() {
  return (
    <div>
      <div>
        <Hero />
        <Brands />
        <FeaturedProducts />
      </div>
    </div>
  );
}
