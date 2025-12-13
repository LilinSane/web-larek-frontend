import { ICart } from '../data/icart';

export interface ICartService {
	getCart(id: string): Promise<ICart>;
	putInCart(cartId: string, productId: string): Promise<ICart>;
	deleteFromCart(cartId: string, productId: string): Promise<void>;
}