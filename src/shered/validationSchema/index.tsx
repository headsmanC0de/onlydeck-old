import * as Yup from 'yup';

export const postOrderSchema = Yup.object().shape({
	name: Yup.string().min(2, 'Надто коротке ім`я!').max(15, 'Запис надто довгий!').required('Поле обов`язкове'),
	lastName: Yup.string().min(2, 'Запис надто коротний!').max(15, 'Запис надто довгий!').required('Поле обов`язкове'),
	phone: Yup.string()
		.matches(/^[0-9]+$/, 'Поле повинно містити лише цифри')
		.min(10, 'Запис надто коротний!')
		.max(12, 'Запис надто довгий!')
		.required('Поле обов`язкове'),
	city: Yup.string().min(2, 'Запис надто коротний!').max(50, 'Запис надто довгий!').required('Поле обов`язкове'),
	novaposhta: Yup.string().min(1, 'Запис надто коротний!').max(7, 'Запис надто довгий!').required('Поле обов`язкове'),
});
