import type { FC } from 'react';
import React from 'react';

import styles from './TextField.module.scss';
import type { InputProps } from './TextField.props';

export const TextField: FC<InputProps> = ({ value, label, formik, name, ...props }) => {
	const { handleChange } = formik;

	return (
		<>
			<label className={styles.input}>
				<textarea
					id={name}
					name={name}
					className={`${styles.input__field} ${styles.textarea}`}
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
			</label>
		</>
	);
};
