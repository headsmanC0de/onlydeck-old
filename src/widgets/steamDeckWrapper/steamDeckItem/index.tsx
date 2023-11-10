'use client';

import { FC, useState } from 'react';

import { Tag } from '@uikit';
import Image from 'next/image';

import CustomPopup from '../../popup';
import SteamDeckPopup from '../steamDeckPopup';
import styles from './SteamDeckItem.module.scss';
import type { SteamDeckItemProps } from './SteamDeckItem.props';

const SteamDeckItem: FC<SteamDeckItemProps> = ({ steamDeck }) => {
	const [visibility, setVisibility] = useState<boolean>(false);

	return (
		<>
			<div
				onClick={() => setVisibility(!visibility)}
				className={`
					${styles.steamDeckItem}
					${styles['v' + steamDeck.version]}
				`}
			>
				<div className={styles.tags}>
					<Tag
						text={steamDeck.newVersion}
						type={'version'}
					/>
					<Tag
						text={steamDeck.price}
						type={'price'}
					/>
				</div>
				<Image
					className={styles.image}
					src={steamDeck.image as string}
					fill
					style={{ objectFit: 'cover' }}
					alt={`SteamDeck ${steamDeck.version} GB`}
				/>
			</div>
			<CustomPopup
				onClose={setVisibility}
				visibility={visibility}
			>
				<SteamDeckPopup steamDeck={steamDeck} />
			</CustomPopup>
		</>
	);
};

export default SteamDeckItem;
