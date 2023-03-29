export interface PriceProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	text: string | number;
	type: 'price' | 'version';
}
