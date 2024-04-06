npm install react-hook-form


import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically make a request to your server with the form data to attempt a login
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} placeholder="Enter your email here" />
      <p>{errors.email && "Email is required or invalid"}</p>

      <input {...register("password", { required: true })} placeholder="Enter your password here" type="password" />
      <p>{errors.password && "Password is required"}</p>

      <input type="submit" />
    </form>
  );
};

export default LoginForm;