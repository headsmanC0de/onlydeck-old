'use client';

import { ButtonLink } from '@uikit';
import { LINKS } from 'constant';

import Community from '../../../public/icons/Community.svg';
import Joystick from '../../../public/icons/Joystick.svg';
import styles from './telegramConnect.module.scss';

export default function TelegramConnection() {
	return (
		<div className={styles.telegramConnect}>
			<ButtonLink
				target='_blank'
				href={LINKS.TELEGRAM_BOT}
				icon={Joystick}
			>
				Наш бот
			</ButtonLink>
			<ButtonLink
				target='_blank'
				href={LINKS.TELEGRAM_GROUP}
				icon={Community}
			>
				Ком’юніті
			</ButtonLink>
		</div>
	);
}
