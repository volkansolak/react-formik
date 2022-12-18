import * as yup from 'yup';

const validations = yup.object().shape({
    email: yup
        .string()
        .email("Geçerli bir email giriniz.")
        .required("Email zorunlu."),
    password: yup
        .string()
        .min(5, "Parolanız en az 5 karakter olmalıdır.")
        .required("Password zorunlu."),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password")], "Parolalar aynı değil.")
        .required("Password zorunlu."),
});

export default validations;