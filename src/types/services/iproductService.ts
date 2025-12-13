import { IProduct, IProductList } from '../data/iproduct';

export interface IProductService {
	getAllProducts(): Promise<IProductList>;
	getProductById(id: string): Promise<IProduct | undefined>;
}