'use client';

import { FC, useState } from 'react';

import { Button } from '@uikit';
import Image from 'next/image';
import { ISteamDeck } from 'public/mockData/steamDeck/types';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

import CustomerDataPopup from '../customerDataPopup';
import CustomPopup from '../popup';
import styles from './BagWrapper.module.scss';
import { BagWrapperProps } from './BagWrapper.props';

const BagWrapper: FC<BagWrapperProps> = ({ closeBag }) => {
	const [visibility, setVisibility] = useState<boolean>(false);

	const [bag, setToBag] = useLocalStorage('bag', []);

	const totalPrice = bag.reduce((accumulator: number, current: ISteamDeck) => accumulator + current.price, 0);

	const removeOneFromLocalStorage = (steamItem: ISteamDeck) => {
		const filteredArray = bag.filter((item: ISteamDeck, index: number) => {
			return item.version !== steamItem.version || index !== bag.indexOf(steamItem);
		});
		setToBag(filteredArray);
	};

	const closePopup = () => {
		setVisibility(false);
		closeBag(false);
	};

	return (
		<div className={styles.BagWrapper}>
			<h3>Корзина</h3>
			{bag.map((item: ISteamDeck, index: number) => {
				return (
					<div
						key={`${item.version}-${index}`}
						className={styles.BagBox}
					>
						<div>
							<span
								className={styles.close}
								onClick={() => removeOneFromLocalStorage(item)}
							>
								&times;
							</span>
						</div>
						<div className={styles.rightBox}>
							<Image
								className={styles.image}
								src={item.image as string}
								alt={`SteamDeck ${item.version} GB`}
								width={100}
								height={100}
							/>
							<div className={styles.bagDes}>
								<h3 className={styles.bagDesTitle}>{item.title}</h3>
								<p>{item.price}₴</p>
							</div>
						</div>
						<div className={styles.leftBox}>
							<div className={styles.price}>
								<h3 className={styles.bagDesTitle}>{item.price}₴</h3>
							</div>
						</div>
					</div>
				);
			})}
			{!bag.length ? (
				<h3>Ваша корзина пуста, додайте товар</h3>
			) : (
				<div className={styles.bagTotal}>
					<div className={styles.bagTotal_center}>
						<Button onClick={() => setVisibility(!visibility)}>Купити</Button>
					</div>
					<h3 className={styles.bagTotal_left}>{totalPrice}₴</h3>
				</div>
			)}
			{visibility && (
				<CustomPopup
					onClose={setVisibility}
					visibility={visibility}
				>
					<CustomerDataPopup
						steamDeck={bag}
						setVisibility={closePopup}
						bag
					/>
				</CustomPopup>
			)}
		</div>
	);
};

export default BagWrapper;
