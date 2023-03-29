import type { FC } from 'react';
import React from 'react';

import Image from 'next/image';

import bag from '../../../public/icons/bag.svg';
import styles from './Bag.module.scss';
import type { BagProps } from './Bag.props';

export const Bag: FC<BagProps> = ({
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onClick = () => {},
}) => {
	return (
		<Image
			onClick={onClick}
			className={styles.imageBag}
			src={bag}
			alt='Корзина'
		/>
	);
};
