import { IEvents } from '../../components/base/events';

export interface IViewComponent{
	render(data?: object): HTMLElement;
}

export interface IViewConstructor{
	new (container: HTMLElement, events: IEvents): IViewComponent;
}