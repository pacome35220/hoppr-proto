import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

export interface Message {
	message: string;
	mine: boolean
}

export interface Contact {
	name: string;
	network: string;
	pending_message: number;
}

export enum Network {
	Slack = '../assets/slack_logo.png',
	Discord = '../assets/discord_logo.png',
	Yammer = '../assets/yammer_logo.png',
	Mail = '../assets/mail_logo.png',
}

@Injectable({
	providedIn: 'root'
})
export class SocketService {

	constructor(private socket: Socket) { }

	sendMessage(msg: string) {
		this.socket.emit('message', msg);
	}
}
