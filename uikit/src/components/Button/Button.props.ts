import type { ReactNode } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLLabelElement> {
	children: ReactNode;
	backGroundcolor?: string;
}
