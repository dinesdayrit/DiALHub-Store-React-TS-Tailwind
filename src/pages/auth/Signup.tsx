
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, formAttributes } from './Schema/Formschema';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      privacyPolicy: false,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    console.log(values);
    reset();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-screen">

        <div className="flex flex-col p-12 h-full items-center">
        <div className="flex flex-col items-center">
        <h1 className="font-bold text-3xl text-green-500">Register</h1>
        </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-4">
        {formAttributes.map((attribute) => (
          <div key={attribute.name} className="mt-4">
            <label>{attribute.label}</label>
            <input
              className="bg-white rounded-lg shadow-md p-4 w-full h-10 border"
              type={attribute.type}
              placeholder={attribute.placeholder}
              {...register(attribute.name)}
            />
            {errors[attribute.name]?.message && <p className="text-red-500 mt-1">{errors[attribute.name]?.message}</p>}
          </div>
        ))}
        <p className="text-end mt-4">Already have an account? <Link to="/login" className="text-green-500 underline">Login</Link> </p>
        <button type="submit" className="bg-green-400 mt-4 rounded-lg text-white py-2">Sign Up</button>
        <div>
          <label className="flex gap-1">
            <input type="checkbox" {...register('privacyPolicy')} />
             I acknowledge the privacy policy
          </label>
          {errors.privacyPolicy && <p className="text-red-500 mt-1">{errors.privacyPolicy.message}</p>}
        </div>
        
      </form>
      </div>

      <div className="hidden md:block w-full h-full 2">
        <img src='/loginpic.jpg' alt="/" className="h-full w-full bg-cover"/>
      </div>
    </div>
  );
};

export default Signup;
