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
		title: 'Steam Deck™ (512 GB)',
		version: 512,
		price: 31000,
		description: [
			'512 ГБ внутрішнього сховища NVMe SSD',
			'Найшвидше сховище',
			'Високоякісне матоване скло з антибліковим покриттям',
			'Ексклюзивний футляр',
			'Ексклюзивний комплект профілю спільноти Steam',
			'Ексклюзивна тема для віртуальної клавіатури',
		],
		photos: [steamDeck1, steamDock3, steamDock4, steamDock5, steamDeckDock, steamDeckDock2, steamDeckDock3],
	},
	{
		image: steamDeck256,
		title: 'Steam Deck™ (256 GB)',
		version: 256,
		price: 26000,
		description: ['256 ГБ внутрішнього сховища NVMe SSD', 'Швидше сховище', 'Футляр', 'Ексклюзивний комплект профілю спільноти Steam'],
		photos: [steamDeck1, steamDock3, steamDock4, steamDock5, steamDeckDock, steamDeckDock2, steamDeckDock3],
	},
	{
		image: steamDeck64,
		title: 'Steam Deck™ (64 GB)',
		version: 64,
		price: 20000,
		description: ['64 ГБ внутрішнього сховища eMMC', 'Футляр'],
		photos: [steamDeck1, steamDock3, steamDock4, steamDock5, steamDeckDock, steamDeckDock2, steamDeckDock3],
	},
	{
		image: steamDock,
		title: 'Steam Dock™',
		version: 'dock',
		price: 6000,
		description: [
			'Док-станція Steam Deck™ створена, щоб додати нові можливості вашій ігровій системі. Підключайте Steam Deck до телевізора у вітальні, використовуйте його на робочому місці, заряджайте на тумбочці біля ліжка — док-станція є ідеальним рішенням для відкриття нових місць і способів користування Steam Deck.	Док-станція не завелика й не замала — її розмір і форма ідеальні для надійного тримання Steam Deck. Від гнучкого перехідника USB-C належної довжини з вертикальним конектором до оправленого гумою гнізда, що захищає пристрій від подряпин, — док-станція створена для Steam Deck.'
		],
		photos: [steamDeck1, steamDock3, steamDock4, steamDock5, steamDeckDock, steamDeckDock2, steamDeckDock3],
	},
];
