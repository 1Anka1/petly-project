// import { useState } from 'react';
import * as SC from './LoginFrom.styled';
import { useForm } from 'react-hook-form';

export default function LoginForm() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name } }) => {
  //   switch (name) {
  //     case 'email':
  //       console.log(name, 'Name');

  //       break;
  //     case 'password':
  //       console.log(name);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const { register, handleSubmit, formState, reset } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const errorEmail = formState.errors['email']?.message;
  const errorPassword = formState.errors['password']?.message;

  return (
    <SC.Form onSubmit={handleSubmit(onSubmit)}>
      <SC.FormTitle>Login</SC.FormTitle>
      <SC.Input
        placeholder="Email"
        type="email"
        name="email"
        // onChange={handleChange}
        {...register('email', {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />
      {errorEmail && <p>Invalid email address</p>}

      <SC.Input
        type="text"
        name="password"
        placeholder="Password"
        // value={password}
        // onChange={handleChange}
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
      {errorPassword && <p>Must include lower, upper, number, and special chars</p>}

      <SC.LoginButton type="submit">Login</SC.LoginButton>
      <SC.FormText>
        Don’t have an account? <SC.Register to="/registration">Registration</SC.Register>
      </SC.FormText>
    </SC.Form>
  );
}
