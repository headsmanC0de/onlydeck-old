import type { FC } from 'react';
import React from 'react';

import styles from './Tag.module.scss';
import type { PriceProps } from './Tag.props';

export const Tag: FC<PriceProps> = ({ text, type, ...props }) => {
	return (
		<div
			className={`${styles.tag} ${styles[type]}`}
			{...props}
		>
			{`${text} ${typeof text !== 'string' ? (type === 'price' ? '₴' : 'GB') : ''}`}
		</div>
	);
};
