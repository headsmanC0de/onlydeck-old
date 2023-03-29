import type { FC } from 'react';
import React from 'react';

import Image from 'next/image';

import warning from '../../../public/icons/warning.svg';
import styles from './AlertForm.module.scss';
import type { ButtonProps } from './AlertForm.props';

export const AlertForm: FC<ButtonProps> = ({ text, ...props }) => {
	return (
		<div className={styles.text}>
			<Image
				className={styles.imageWarning}
				src={warning}
				alt='Увага'
				width={20}
				height={20}
			/>
			{text}
		</div>
	);
};
