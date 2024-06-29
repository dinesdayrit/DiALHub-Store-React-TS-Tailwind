const brandsData = [

  {
    imageSrc:
      "adidas.svg",
    altText: "adidas",
    link: "#",
  },
  {
    imageSrc: "vans-3.svg",
    altText: "vans",
    link: "#",
  },
  {
    imageSrc: "quiksilver.svg",
    altText: "uideck",
    link: "#",
  },
  {
    imageSrc:
      "nike.svg",
    altText: "Nike",
    link: "#",
  },


];

export default function Brands() {
  return (
    <section className="bg-sky-900 py-8 lg:py-[60px] dark:bg-dark">
        <h1 className="text-center text-slate-400 text-xl font-semibold">Our brands</h1>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Brand = {
  imageSrc: string;
  altText: string;
  link: string;
};

const SingleImage = ({ brand }: { brand: Brand }) => {
  const { link, imageSrc, altText } = brand;
  return (
    <a
      href={link}
      className="flex w-[150px] items-center justify-center md:py-5 2xl:w-[180px]"
    >
      <img src={imageSrc} alt={altText} className="h-24 md:h-full" />
    </a>
  );
};
