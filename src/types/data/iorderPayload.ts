import { PaymentMethod } from './paymentMethod';

export interface IOrderPayload {
	payment: PaymentMethod;
	email: string;
	phone: string;
	address: string;
	total: number;
	items: string[];
}