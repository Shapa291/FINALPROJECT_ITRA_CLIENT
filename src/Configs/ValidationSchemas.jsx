import * as yup from "yup";

export const validationProblemFormSchema = yup.object().shape({
    theme: yup.string().required('*theme value is required'),
    name: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    condition: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    answer: yup.string().typeError('Должно быть строкой').required('Обязательно'),
})

export const validationRegAndSignSchema = yup.object().shape({
    username: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').min(4).max(20).required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
})