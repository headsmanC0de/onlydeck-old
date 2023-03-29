'use client';

import { FC, useState } from 'react';

import { Button } from '@uikit';
import Image from 'next/image';
import { ISteamDeck } from 'public/mockData/steamDeck/types';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { FreeMode, Navigation, Thumbs } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Swiper, SwiperSlide } from 'swiper/react';

import CustomerDataPopup from '../../customerDataPopup';
import CustomPopup from '../../popup';
import styles from './SteamDeckPopup.module.scss';
import type { SteamDeckPopupProps } from './SteamDeckPopupProps.props';

const SteamDeckPopup: FC<SteamDeckPopupProps> = ({ steamDeck }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [visibility, setVisibility] = useState<boolean>(false);
	const [bag, setToBag] = useLocalStorage('bag', []);

	const inBag = () => {
		if (typeof bag === 'object') {
			const result: [] = bag.filter((item: ISteamDeck) => item.version === steamDeck.version);
			return result.length && true;
		}
	};

	const removeFromLocalStorage = (steamDeck: ISteamDeck) => {
		const result = bag?.filter((item: ISteamDeck) => item.version !== steamDeck.version);
		setToBag(result);
	};

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.swiperWrapper}>
					<Swiper
						spaceBetween={10}
						navigation={true}
						thumbs={{
							swiper:
								//@ts-ignore
								thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
						}}
						modules={[FreeMode, Navigation, Thumbs]}
						className='mySwiper2'
						style={{ width: '100%', height: '100%' }}
					>
						{steamDeck.photos.map((photo, i) => {
							return (
								<SwiperSlide
									key={`${steamDeck.version}-${steamDeck.title}-${i}`}
									className={styles.imageWrapper}
								>
									<div>
										<Image
											className={styles.image}
											objectFit='cover'
											fill
											src={photo as unknown as string}
											alt={`${steamDeck.title}`}
										/>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<Swiper
						//@ts-ignore
						onSwiper={setThumbsSwiper}
						spaceBetween={10}
						slidesPerView={4}
						freeMode={true}
						watchSlidesProgress={true}
						modules={[FreeMode, Navigation, Thumbs]}
						direction='horizontal'
						style={{ width: '100%' }}
					>
						{steamDeck?.photos?.map((photo, i) => {
							return (
								<SwiperSlide
									key={i}
									className={styles.imageThumbs}
								>
									<Image
										width={100}
										height={100}
										className={styles.imageThumbs}
										src={photo as unknown as string}
										alt={`${steamDeck.title}`}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<div className={styles.description}>
					<h1>
						<h3>{steamDeck.title}</h3>
					</h1>
					<ul className={styles.descriptionList}>
						{steamDeck.description.map((string) => {
							return <li key={string}>{string}</li>;
						})}
					</ul>
					<div className={styles.bayWrapper}>
						<h3 className={styles.bayTitle}>{steamDeck.price} ₴</h3>
						<div className={styles.bayButton}>
							<Button onClick={() => setVisibility(!visibility)}>Купити</Button>
							<Button
								backGroundcolor={'pink'}
								onClick={() => {
									inBag() ? removeFromLocalStorage(steamDeck) : setToBag([...bag, steamDeck]);
								}}
							>
								{inBag() ? 'Видалити з корзини' : 'Додати в корзину'}
							</Button>
						</div>
					</div>
				</div>
			</div>
			{visibility && (
				<CustomPopup
					onClose={setVisibility}
					visibility={visibility}
				>
					<CustomerDataPopup
						steamDeck={steamDeck}
						setVisibility={setVisibility}
					/>
				</CustomPopup>
			)}
		</>
	);
};

export default SteamDeckPopup;
