// import { useState } from 'react';
import * as SC from './LoginFrom.styled';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../redux/selectors';
import { logIn } from '../../redux/userSlice/userSlice';

export default function LoginForm() {
  const userSchema = yup.object({
    email: yup.string().email('enter a valid Email').required(),
    password: yup.number().required().positive().integer(),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(userSchema),
    mode: 'onChange',
  });

  const user = useSelector(getUser);
  console.log(user);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(logIn(data));
    reset();
    //check password here user -> include [users]
    //dispatch -> true --- false
  };

  const errorEmail = formState.errors['email']?.message;
  const errorPassword = formState.errors['password']?.message;

  return (
    <SC.Form onSubmit={handleSubmit(onSubmit)}>
      <SC.FormTitle>Login</SC.FormTitle>
      <SC.InputWrapper>
        <SC.Input
          placeholder="Email"
          type="email"
          name="email"
          error={errorEmail}
          {...register('email')}
        />
        <SC.InputMessage>{errorEmail}</SC.InputMessage>
      </SC.InputWrapper>
      <SC.InputWrapper>
        <SC.Input
          type="text"
          name="password"
          placeholder="Password"
          error={errorPassword}
          {...register('password')}
        />
        <SC.InputMessage>{errorPassword}</SC.InputMessage>
      </SC.InputWrapper>

      <SC.LoginButton type="submit">Login</SC.LoginButton>
      <SC.FormText>
        Don’t have an account? <SC.Register to="/registration">Registration</SC.Register>
      </SC.FormText>
    </SC.Form>
  );
}
