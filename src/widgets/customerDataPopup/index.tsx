'use client';

import { FC, useState } from 'react';

import { Button, Input } from '@uikit';
import { useFormik } from 'formik';
import { alertErr, alertSu, poshtomatWarn } from 'public/mockData/alerts';
import { postOrder } from 'src/hooks/postOrder';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import CustomPopup from 'src/widgets/popup';
import { TextField } from 'uikit/src/components/TextField/TextField';
import { AlertForm } from 'uikit/src/components/alert/AlertForm';

import { OrderMessageDto } from 'types/dto';

import { postOrderSchema } from '../../shered/validationSchema';
import styles from './CustomerDataPopup.module.scss';
import type { CustomerDataPopupProps } from './CustomerDataPopup.props';

const CustomerDataPopup: FC<CustomerDataPopupProps> = ({ bag, steamDeck, setVisibility }) => {
	const [visibility, setVisi] = useState<boolean>(false);
	const [allertText, setAllertText] = useState<string>('');
	const [bags, setToBag] = useLocalStorage('bag', []);

	const newArr = bag
		? steamDeck?.map((item: any) => {
				return { version: item.version, price: item.price, status: 'не оплачено' };
		  })
		: '';

	const initialValues: OrderMessageDto = {
		name: '',
		lastName: '',
		phone: '',
		city: '',
		novaposhta: '',
		telegram: '',
		preOrder: false,
		comment: 'Без коментаря',
		order: bag
			? newArr
			: [
					{
						newVersion: steamDeck.newVersion,
						version: steamDeck.version,
						price: steamDeck.price,
						status: 'не оплачено',
					},
			  ],
	};

	const formik = useFormik({
		initialValues,
		validationSchema: postOrderSchema,
		onSubmit: (values, { setSubmitting }) => {
			postOrder(values)
				.then(() => {
					setAllertText(alertSu);
					setToBag([]);
				})
				.catch((err) => {
					setAllertText(alertErr), console.log(err);
				})
				.finally(() => setVisi(true));
			setSubmitting(false);
		},
	});

	const { handleSubmit } = formik;

	const closePopups = () => {
		setVisibility(false);
		setVisi(false);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className={styles.formStyle}
			>
				<h3 className={styles.titleForm}>Дані для доставки</h3>
				<Input
					label='Телефон'
					formik={formik}
					name={'phone'}
				/>
				<Input
					label="Ім'я"
					formik={formik}
					name={'name'}
				/>
				<Input
					label='Прізвище'
					formik={formik}
					name={'lastName'}
				/>
				<Input
					label='Місто'
					formik={formik}
					name={'city'}
				/>
				<Input
					label='Номер відділення'
					formik={formik}
					name={'novaposhta'}
				/>
				<AlertForm text={poshtomatWarn} />
				<Input
					label='Телеграм'
					formik={formik}
					name={'telegram'}
				/>
				<TextField
					label='Ваш коментар'
					formik={formik}
					name={'comment'}
				/>
				<Button type='submit'>Підтвердити</Button>
			</form>
			{visibility && (
				<CustomPopup
					onClose={closePopups}
					visibility={visibility}
				>
					<p className={styles.confirmOrder}>{allertText}</p>
				</CustomPopup>
			)}
		</>
	);
};

export default CustomerDataPopup;
