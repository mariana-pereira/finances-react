import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
  name: Yup
    .string()
    .required('O nome é obrigatório'),
  email: Yup
    .string()
    .email()
    .required('O e-mail é obrigatório'),
  password: Yup
    .string()
    .required('A senha é obrigatória')
    .min(5),
});

export default signUpSchema;
