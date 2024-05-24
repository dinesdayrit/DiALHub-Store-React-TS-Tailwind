
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, formAttributes } from './Schema/Formschema';

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
    <div className="flex justify-center md:mt-16 lg:18">
        <div className="flex flex-col lg:justify-center p-12 rounded-md lg:w-[30rem] lg:h-auto h-screen w-screen border shadow-xl">
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
        <button type="submit" className="bg-green-400 mt-4 rounded-lg text-white py-2">Sign Up</button>
        <div>
        
          <label>
            <input type="checkbox" {...register('privacyPolicy')} />
            I acknowledge the privacy policy
          </label>
          {errors.privacyPolicy && <p className="text-red-500 mt-1">{errors.privacyPolicy.message}</p>}
        </div>
        
      </form>
      </div>
    </div>
  );
};

export default Signup;
