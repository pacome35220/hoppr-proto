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
	HoppR = '../assets/HoppR_Logo.png',
}

export function generateRandomNetwork(): string {
	const mdr = Math.round(Math.random() * 100 % 4);

	if (mdr == 0)
		return Network.Discord;
	else if (mdr == 1)
		return Network.Mail;
	else if (mdr == 2)
		return Network.Slack;
	else
		return Network.Yammer;
}

@Injectable({
	providedIn: 'root'
})
export class SocketService {

	constructor(private socket: Socket) {}

	connect(name: string) {
		this.socket.emit('newUser', {
			name: name,
			network: Network.HoppR,
			pending_message: 0
		} as Contact)
	}

	sendMessage(msg: string) {
		this.socket.emit('message', msg);
	}

	getUserList(): Contact[] {
		return [];
	}
}
