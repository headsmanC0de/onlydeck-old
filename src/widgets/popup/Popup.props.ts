import type { ReactNode } from 'react';

export interface PopupProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	onClose: (arg0: boolean) => void;
	visibility: boolean;
}
