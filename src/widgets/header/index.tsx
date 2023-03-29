'use client';

import { useState } from 'react';

import { Bag } from '@uikit';

import BagWrapper from '../bag';
import CustomPopup from '../popup';
import styles from './header.module.scss';

export default function Header() {
	const [visibility, setVisibility] = useState<boolean>(false);

	return (
		<header className={styles.header}>
			<Bag onClick={() => setVisibility(!visibility)} />
			<CustomPopup
				onClose={setVisibility}
				visibility={visibility}
			>
				<BagWrapper closeBag={setVisibility} />
			</CustomPopup>
		</header>
	);
}
