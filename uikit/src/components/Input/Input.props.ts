export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	text?: string | number;
	label?: string;
	formik?: any;
	name?: string;
	type?: string;
	value?: string;
}
