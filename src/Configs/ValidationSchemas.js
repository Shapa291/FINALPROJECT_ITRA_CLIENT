import * as yup from "yup";

export const validationProblemFormSchema = yup.object().shape({
    theme: yup.string().not(['choose']).required('*Theme value is required'),
    name: yup.string().typeError('Должно быть строкой').required('Name value is required'),
    condition: yup.string().typeError('Должно быть строкой').required('Condition value is required'),
    answer: yup.string().typeError('Должно быть строкой').required('Answer value is required'),
})

export const validationRegAndSignSchema = yup.object().shape({
    username: yup.string().typeError('Должно быть строкой').required('Обязательно'),
    password: yup.string().typeError('Должно быть строкой').min(4).max(20).required('Обязательно'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно'),
})