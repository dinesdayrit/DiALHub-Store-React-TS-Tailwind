import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { formAttributes } from './Schema/Formschema';

// Adjust the form schema for login
const loginSchema = z.object({
  email: z
    .string()
    .min(3, {
      message: 'Email is required',
    })
    .email({
      message: 'Please enter a valid email address',
    }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function Login() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginSchema> = (values) => {
    console.log(values);
    reset();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen">
      <div className="flex flex-col p-12 h-full items-center">
        <div className="flex flex-col items-center">
          <img src="/dial-logo.png" width={100} alt="Dial Logo" />
          <h1 className="font-bold text-3xl text-green-500">Login</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4">
          {formAttributes.slice(0, 2).map((attribute) => (
            <div key={attribute.name} className="mt-4">
              <label>{attribute.label}</label>
              <input 
                type={attribute.type}
                {...register(attribute.name as keyof LoginSchema)}
                className="bg-white rounded-lg shadow-md p-4 w-full h-10"
                placeholder={attribute.placeholder}
              />
              {errors[attribute.name as keyof LoginSchema] && (
                <p className="text-red-500 mt-1">{errors[attribute.name as keyof LoginSchema]?.message}</p>
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

      <div className="hidden md:block w-full h-full">
        <img src="/loginpic.jpg" alt="Login" className="h-full"/>
      </div>
    </div>
  );
}
