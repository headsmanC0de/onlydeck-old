'use client';

import type { FC } from 'react';

import { SteamDeckStorage } from '../../../public/mockData/steamDeck';
import styles from './SteamDeckWrapper.module.scss';
import type { SteamDeckWrapperProps } from './SteamDeckWrapper.props';
import SteamDeckItem from './steamDeckItem';

const SteamDeckWrapper: FC<SteamDeckWrapperProps> = () => {
	return (
		<div className={styles.steamDeckWrapper}>
			{SteamDeckStorage.map((steamDeck) => {
				return (
					<SteamDeckItem
						key={steamDeck.price}
						steamDeck={steamDeck}
					/>
				);
			})}
		</div>
	);
};

export default SteamDeckWrapper;
