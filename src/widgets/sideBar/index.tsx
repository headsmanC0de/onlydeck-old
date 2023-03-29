'use client';

import React, { useState } from 'react';

import { Logo } from '@uikit';
import { BurgerMenu } from 'uikit/src/components/burgerMenu/BurgerMenu';

import TelegramConnection from '../../features/TelegramConnection';
import styles from './sideBar.module.scss';

export default function SideBar() {
	const [show, setShow] = useState(false);

	return (
		<>
			<BurgerMenu
				show={show}
				setShow={setShow}
			/>
			<aside className={`${styles.sidebar} ${show && styles.show}`}>
				<Logo />
				<TelegramConnection />
			</aside>
		</>
	);
}
