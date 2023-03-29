import type { FC } from 'react';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import styles from './ButtonLink.module.scss';
import type { ButtonProps } from './ButtonLink.props';

export const ButtonLink: FC<ButtonProps> = ({
	children,
	icon = '',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onClick = () => {},
	href,
	target,
	...props
}) => {
	return (
		<Link
			target={target}
			href={href}
			onClick={onClick}
			className={styles.button}
			{...props}
		>
			<Image
				src={icon}
				alt=''
			/>
			{children}
		</Link>
	);
};
