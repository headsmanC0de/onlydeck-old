import type { FC } from 'react';
import React from 'react';

import styles from './BurgerMenu.module.scss';
import type { BurgerMenuProps } from './BurgerMenu.props';

export const BurgerMenu: FC<BurgerMenuProps> = ({ show, setShow, ...props }) => {
	return (
		<div className={styles.nav_container}>
			<input
				className={styles.checkbox}
				type='checkbox'
				name=''
				id='er'
				onClick={() => setShow(!show)}
			/>
			<div className={styles.hamburger_lines}>
				<span className={`${styles.line} ${styles.line1}`}></span>
				<span className={`${styles.line} ${styles.line2}`}></span>
				<span className={`${styles.line} ${styles.line3}`}></span>
			</div>
		</div>
	);
};
