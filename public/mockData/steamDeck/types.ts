export interface ISteamDeck {
	image: string | object;
	title: string;
	newVersion: string;
	version: number | string;
	price: number;
	description: string[];
	photos: object[];
}
