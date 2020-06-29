import React from 'react';
import { Link } from 'react-router-dom';

import AuthLayout from '../../layouts/auth';

const Register: React.FC = () => (
  <AuthLayout>
    <form>
      <input name="name" placeholder="Digite seu nome" />
      <input name="email" type="email" placeholder="Digite seu e-mail" />
      <input
        name="password"
        type="password"
        placeholder="Digite sua senha"
      />
      <button type="submit">Cadastrar</button>
      <Link to="/login">Já tenho login</Link>
    </form>
  </AuthLayout>
);

export default Register;
