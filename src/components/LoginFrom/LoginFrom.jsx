// import { useState } from 'react';
import * as SC from './LoginFrom.styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function LoginForm() {
  const userSchema = yup.object({
    email: yup.string().email('Invalide').required(),
    password: yup.number().required().positive().integer(),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(userSchema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
    //check password here user -> include [users]
    //dispatch -> true --- false
  };

  const errorEmail = formState.errors['email']?.message;
  const errorPassword = formState.errors['password']?.message;

  return (
    <SC.Form onSubmit={handleSubmit(onSubmit)}>
      <SC.FormTitle>Login</SC.FormTitle>
      <div>
        <SC.Input
          placeholder="Email"
          type="email"
          name="email"
          error={errorEmail}
          {...register('email')}
        />
        <p>{errorEmail}</p>
      </div>
      <div>
        <SC.Input
          type="text"
          name="password"
          placeholder="Password"
          error={errorPassword}
          {...register('password')}
        />
        {errorPassword && <p>{errorPassword}</p>}
      </div>

      <SC.LoginButton type="submit">Login</SC.LoginButton>
      <SC.FormText>
        Don’t have an account? <SC.Register to="/registration">Registration</SC.Register>
      </SC.FormText>
    </SC.Form>
  );
}
