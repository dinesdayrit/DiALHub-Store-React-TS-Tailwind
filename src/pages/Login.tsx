export default function Login() {
    return (
      <div className="flex justify-center items-center h-screen">

        <div className="flex flex-col lg:justify-center outline  p-14 rounded-md lg:w-[30rem] lg:h-auto h-screen w-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <img src="./dial-logo.png" width={100}/>
          <h1 className="font-bold text-3xl text-green-500">Login</h1>

          </div>
          
          
          <div className="mt-4">
            <label>Email</label>
            <input className="bg-white rounded-lg shadow-md p-4 w-full h-10" placeholder="Enter your Email" />
          </div>
  
          <div className="mt-4">
            <label>Password</label>
            <input className="bg-white rounded-lg shadow-md p-4 w-full h-10" placeholder="******" />
            <p className="text-right hover:text-green-500 cursor-pointer">Forgot Password?</p>
          </div>
  
          <button className="bg-green-400 mt-4 rounded-lg text-white py-2">Login</button>
          <p className="mt-4">Don't have an account? <span className="text-green-500 cursor-pointer">Register here</span></p>
        </div>
      </div>
    );
  }
  