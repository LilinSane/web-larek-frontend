import { ProductCategory } from './productCategory';

export interface IProduct {
	id: string;
	title: string;
	description: string;
	image: string;
	category: ProductCategory;
	price: number | null;
}

export interface IProductList {
	total: number;
	items: IProduct[];
}