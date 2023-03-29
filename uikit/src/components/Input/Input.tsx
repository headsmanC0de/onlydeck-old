import type { FC } from 'react';
import React from 'react';

import styles from './Input.module.scss';
import type { InputProps } from './Input.props';

export const Input: FC<InputProps> = ({ value, type = 'text', text, label, formik, name, ...props }) => {
	const { handleChange, errors, touched, handleBlur } = formik;

	return (
		<>
			<label className={styles.input}>
				<input
					{...props}
					onBlur={handleBlur}
					id={name}
					name={name}
					className={`${styles.input__field} ${name && errors[name] && touched[name] && styles._errorBox}`}
					type={type}
					placeholder=' '
					onChange={handleChange}
					value={value}
				/>
				<span
					className={styles.input__label}
					onChange={handleChange}
				>
					{label}
				</span>
				{name && errors[name] && touched[name] && <div className={styles.error}>{errors[name]}</div>}
			</label>
		</>
	);
};
