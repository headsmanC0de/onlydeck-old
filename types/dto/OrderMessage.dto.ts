export interface IOrder {
	version: number | string;
	price: number;
	status: string;
}

export interface OrderMessageDto {
	name: string;
	lastName: string;
	phone: string;
	city: string;
	novaposhta: string;
	telegram: string;
	preOrder: boolean;
	comment: string;
	order: IOrder[];
}
