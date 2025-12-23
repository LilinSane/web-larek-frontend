import { IProduct } from './iproduct';

export interface ICart {
	id: string;
	items: IProduct[];

	putInCart(productId: string): void;
	deleteFromCart(productId: string): void;
}