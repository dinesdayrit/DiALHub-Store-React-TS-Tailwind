export default function Banner() {
  return (
    <div>
      <div className="relative">
        <img src="/banner-bg.png" className="max-h-[50rem] w-full" />
        <img
          src="/dial-logo.png"
          className=" w-[5rem] lg:w-[20rem] z-1 absolute lg:top-10 top-5 animate-slide-up-fade-in"
        />
      </div>
    </div>
  );
}
