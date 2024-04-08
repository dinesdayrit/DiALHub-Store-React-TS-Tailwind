
export default function About () {
    return (
        <div className="flex flex-col items-center h-screen">
            <h1 className="mt-16 font-bold text-3xl">About us.</h1>

            <div className="flex flex-col lg:flex-row items-center w-1/2"> 
            <img src="/fam-pic.svg" width={200}/>
            <p className="text-mono">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
        </div>
    )
}
