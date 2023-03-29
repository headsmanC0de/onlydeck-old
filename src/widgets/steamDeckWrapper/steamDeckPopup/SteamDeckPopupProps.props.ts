import { ISteamDeck } from 'public/mockData/steamDeck/types';

export interface SteamDeckPopupProps extends React.AllHTMLAttributes<HTMLButtonElement> {
	steamDeck: ISteamDeck;
}
