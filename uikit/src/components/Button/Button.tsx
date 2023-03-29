import type { FC } from 'react';
import React from 'react';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

export const Button: FC<ButtonProps> = ({ children, backGroundcolor = 'blue', ...props }) => {
	return (
		//@ts-ignore
		<button
			className={`${styles.button} ${styles[backGroundcolor]}`}
			{...props}
		>
			{children}
		</button>
	);
};
