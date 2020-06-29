import React, { InputHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

import { ApplicationState } from '../../store';

import Input from '../../components/Input';
import AuthLayout from '../../layouts/auth';

interface FormData extends InputHTMLAttributes<HTMLInputElement> {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const auth = useSelector((state: ApplicationState) => state.auth.signed);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
