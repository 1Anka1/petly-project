// import { useState } from 'react';
import * as SC from '../LoginFrom/LoginFrom.styled';
import { useForm } from 'react-hook-form';

export default function RegistrationForm() {
  const { register, handleSubmit, reset } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <SC.Form onSubmit={handleSubmit(onSubmit)}>
      <SC.FormTitle>Registration</SC.FormTitle>

      <SC.Input
        placeholder="Email"
        type="email"
        name="email"
        {...register('email', {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />

      <SC.Input
        type="text"
        name="password"
        placeholder="Password"
        {...register('password', {
          required: true,
          minLength: {
            value: 8,
          },
          pattern: {
            value: [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/],
            message: 'Must include lower, upper, number, and special chars',
          },
        })}
      />

      <SC.Input
        placeholder="Confirm password"
        type="text"
        name="password"
        {...register('password', {
          required: true,
        })}
      />
      <SC.LoginButton type="submit">Create an account</SC.LoginButton>

      <SC.FormText>
        Already have an account? <SC.Register to="/login">Login</SC.Register>
      </SC.FormText>
    </SC.Form>
  );
}
