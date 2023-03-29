import { ISteamDeck } from 'public/mockData/steamDeck/types';

export interface SteamDeckItemProps extends React.AllHTMLAttributes<HTMLButtonElement> {
	steamDeck: ISteamDeck;
}
