import React, { InputHTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { signInRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Input';
import AuthLayout from '../../layouts/auth';

interface FormData extends InputHTMLAttributes<HTMLInputElement> {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(signInRequest(data));
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </AuthLayout>
  );
};

export default Login;
