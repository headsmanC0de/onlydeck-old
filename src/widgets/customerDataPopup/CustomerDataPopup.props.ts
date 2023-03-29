import { ISteamDeck } from 'public/mockData/steamDeck/types';

export interface CustomerDataPopupProps extends React.AllHTMLAttributes<HTMLButtonElement> {
	steamDeck: ISteamDeck | any;
	setVisibility: any;
	bag?: boolean;
}
