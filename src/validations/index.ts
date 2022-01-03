import * as Yup from 'yup';

export const CreateGistFormSchema = () => Yup.object().shape({
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required description '),
  fileName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required fileName'),
  content: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required content'),
});

export const CreateLoginFormSchema = () => Yup.object({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required UserName'),
});
