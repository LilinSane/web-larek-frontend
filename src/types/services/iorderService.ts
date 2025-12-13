import { IPaymentData } from '../data/ipaymentData';

export interface IOrderService {
	sendOrder(data: IPaymentData): Promise<IPaymentData>;
}