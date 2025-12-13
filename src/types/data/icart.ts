import { IProduct } from './iproduct';

export interface ICart {
	id: string;
	items: IProduct[];
}