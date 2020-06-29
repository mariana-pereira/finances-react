import React from 'react';
import { Link } from 'react-router-dom';

import AuthLayout from '../../layouts/auth';

const Login: React.FC = () => (
  <AuthLayout>
    <form>
      <input name="email" type="email" placeholder="Digite seu e-mail" />
      <input
        name="password"
        type="password"
        placeholder="Digite sua senha"
      />
      <button type="submit">Entrar</button>
      <Link to="/register">Criar conta gratuita</Link>
    </form>
  </AuthLayout>
);

export default Login;
