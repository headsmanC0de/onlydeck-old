import type { ReactNode } from 'react';

export interface BurgerMenuProps extends React.ButtonHTMLAttributes<HTMLLabelElement> {
	setShow: (arg0: boolean) => void;
	show: boolean;
}
