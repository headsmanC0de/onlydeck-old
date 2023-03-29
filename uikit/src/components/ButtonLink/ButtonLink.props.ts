import type { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
	icon?: string;
	href: string;
	onClick?: () => void;
	target?: '_blank' | '_parent' | '_self' | '_top';
}
