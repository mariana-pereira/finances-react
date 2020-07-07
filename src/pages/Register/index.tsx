import React, { InputHTMLAttributes } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { toast } from 'react-toastify';

import { sigUpRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Input';
import AuthLayout from '../../layouts/auth';

import schema from './schema';

interface FormData extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await schema.validate(data);

      dispatch(sigUpRequest(data));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Digite seu nome" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Digite sua senha"
        />
        <button type="submit">Cadastrar</button>
        <Link to="/login">Já tenho login</Link>
      </Form>
    </AuthLayout>
  );
};

export default Register;
