import { Injectable } from '@angular/core';

export interface Message {
	message: string;
	mine: boolean
}

export interface Contact {
	name: string;
	network: string;
	pending_message: number;
	messages: Message[];
}

@Injectable({
	providedIn: 'root'
})
export class SocketService {

	constructor() { }
}
