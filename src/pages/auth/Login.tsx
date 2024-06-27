import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { formSchema, formAttributes } from './Schema/Formschema';

export default function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    console.log(values);
    reset();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen">

      <div className="flex flex-col lg:justify-center p-12 h-full items-center">
        <div className="flex flex-col items-center">
          <img src="./dial-logo.png" width={100} alt="Dial Logo" />
          <h1 className="font-bold text-3xl text-green-500">Login</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4">
          {formAttributes.slice(0, 2).map((attribute) => (
            <div key={attribute.name} className="mt-4">
              <label>{attribute.label}</label>
              <input 
                type={attribute.type}
                {...register(attribute.name)}
                className="bg-white rounded-lg shadow-md p-4 w-full h-10"
                placeholder={attribute.placeholder}
              />
              {errors[attribute.name] && (
                <p className="text-red-500 mt-1">{errors[attribute.name]?.message}</p>
              )}
            </div>
          ))}

          <button type="submit" className="bg-green-400 mt-4 rounded-lg text-white py-2">
            Login
          </button>
          <p className="mt-4">
            Don't have an account? <Link to='/signup' className="text-green-500 cursor-pointer">Register here</Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-full h-full 2">
        <img src='/loginpic.jpg' alt="/" className="h-full"/>
      </div>
    </div>
  );
}
