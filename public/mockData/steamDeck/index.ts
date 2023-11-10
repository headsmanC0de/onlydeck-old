import steamDeck64 from '../../image/SteamDeck/steamDeck64.jpg';
import steamDeck256 from '../../image/SteamDeck/steamDeck256.png';
import steamDeck512 from '../../image/SteamDeck/steamDeck512.png';
import steamDock from '../../image/SteamDeck/steamDock.png';
import steamDeck1 from '../../image/photoOfSteamDeck/steamDeck1.jpg';
import steamDock3 from '../../image/photoOfSteamDeck/steamDeck3.jpg';
import steamDock4 from '../../image/photoOfSteamDeck/steamDeck4.jpg';
import steamDock5 from '../../image/photoOfSteamDeck/steamDeck5.jpg';
import steamDeckDock2 from '../../image/photoOfSteamDeck/steamDeckDock2.jpg';
import steamDeckDock3 from '../../image/photoOfSteamDeck/steamDeckDock3.jpg';
import steamDeckDock from '../../image/photoOfSteamDeck/steamDeckDock.jpg';
import type { ISteamDeck } from './types';

export const SteamDeckStorage: ISteamDeck[] = [
	{
		image: steamDeck512,
		title: 'Steam Deck™ (1TB) OLED',
		newVersion: '1TB OLED',
		version: 512,
		price: 37000,
		description: [
			'1 ТБ NVMe SSD',
			'OLED-екран з HDR та високоякісним матованим склом з антибліковим покриттям, 1280x800 пікселів',
			'Діагональ екрана 7,4 дюйма',
			'6-нм прискорений процесор',
			'Wi-Fi 6E',
			'Акумулятор ємністю 50 Вт⋅год, 3–12 годин гри (залежить від вмісту)',
			'Зарядний пристрій потужністю 45 Вт із 2,5-м кабелем',
			'Футляр зі знімним чохлом',
			'Комплект профілю Steam',
			'Ексклюзивна відеозаставка',
			'Ексклюзивна тема для віртуальної клавіатури',
		],
		photos: [steamDeck1, steamDock3, steamDock4, steamDock5, steamDeckDock, steamDeckDock2, steamDeckDock3],
	},
	{
		image: steamDeck256,
		title: 'Steam Deck™ (512) OLED',
		newVersion: '512GB OLED',
		version: 256,
		price: 32000,
		description: [
			'512 ГБ NVMe SSD',
			'OLED-екран з HDR, 1280x800 пікселів',
			'Діагональ екрана 7,4 дюйма',
			'Ексклюзивний комплект профілю спільноти Steam',
			'6-нм прискорений процесор',
			'Wi-Fi 6E',
			'Акумулятор ємністю 50 Вт⋅год, 3–12 годин гри (залежить від вмісту)',
			'Зарядний пристрій потужністю 45 Вт із 2,5-м кабелем',
			'Футляр',
			'Комплект профілю Steam',
		],
		photos: [steamDeck1, steamDock3, steamDock4, steamDock5, steamDeckDock, steamDeckDock2, steamDeckDock3],
	},
	{
		image: steamDeck64,
		title: 'Steam Deck™ (512 GB) LCD',
		newVersion: '512GB LCD',
		version: 64,
		price: 24500,
		description: [
			'512 ГБ NVMe SSD',
			'Оптично приєднаний РК-екран із високоякісним матованим склом з антибліковим покриттям, 1280x800 пікселів',
			'7-нм прискорений процесор',
			'Wi-Fi 5',
			'Акумулятор ємністю 40 Вт⋅год, 2–8 годин гри',
			'Зарядний пристрій потужністю 45 Вт із 1,5-м кабелем',
			'Футляр',
			'Комплект профілю Steam',
		],
		photos: [steamDeck1, steamDock3, steamDock4, steamDock5, steamDeckDock, steamDeckDock2, steamDeckDock3],
	},
	{
		image: steamDock,
		title: 'Steam Dock™',
		newVersion: 'Dock',
		version: 'dock',
		price: 5700,
		description: [
			'Док-станція Steam Deck™ створена, щоб додати нові можливості вашій ігровій системі. Підключайте Steam Deck до телевізора у вітальні, використовуйте його на робочому місці, заряджайте на тумбочці біля ліжка — док-станція є ідеальним рішенням для відкриття нових місць і способів користування Steam Deck.	Док-станція не завелика й не замала — її розмір і форма ідеальні для надійного тримання Steam Deck. Від гнучкого перехідника USB-C належної довжини з вертикальним конектором до оправленого гумою гнізда, що захищає пристрій від подряпин, — док-станція створена для Steam Deck.',
		],
		photos: [steamDeck1, steamDock3, steamDock4, steamDock5, steamDeckDock, steamDeckDock2, steamDeckDock3],
	},
];
