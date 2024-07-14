export default function About() {
  return (
    <div className="flex flex-col items-center just h-[32rem] ">
      <h1 className="mt-16 font-bold text-3xl">About us.</h1>

      <div className="flex flex-col lg:flex-row items-center  md:w-1/3 max-w-6xl">
        <img src="/fam-pic.svg" width={200} />
        <p className="text-mono">
          <span className="text-2xl text-amber-700">DiAL </span>
          stands for <span className="text-xl text-amber-600">Di</span>nes,
          <span className="text-xl text-amber-600">A</span>lyssa, and{" "}
          <span className="text-xl text-amber-600">L</span>ucas... Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </div>
  );
}
