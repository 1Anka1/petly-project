// import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as SC from '../LoginFrom/LoginFrom.styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export default function RegistrationForm() {
  const basicSchema = yup.object().shape({
    email: yup.string().email('please enter a valid email').required('Required'),
    password: yup.number().required().positive().integer().required('Required'),
    confirmPassword: yup
      .number()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(basicSchema),
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
