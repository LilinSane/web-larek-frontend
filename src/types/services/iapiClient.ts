import { ApiPostMethods } from '../../components/base/api';

export interface IApiClient {
	baseUrl: string;
	options: RequestInit;

	handleResponse(response: Response): Promise<object>;
	get(uri: string): Promise<object>;
	post(uri: string, data: object, method: ApiPostMethods): Promise<object>;
}