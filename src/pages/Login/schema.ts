import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
  email: Yup
    .string()
    .email()
    .required('O e-mail é obrigatório'),
  password: Yup
    .string()
    .required('A senha é obrigatória')
    .min(5),
});

export default signInSchema;
