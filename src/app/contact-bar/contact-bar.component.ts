import { Component } from '@angular/core';
import { Message } from '../chat/chat.component';

interface Contact {
	name: string;
	network: string;
	pending_message: number;
	messages: Message[];
}

@Component({
	selector: 'app-contact-bar',
	templateUrl: './contact-bar.component.html',
	styleUrls: ['./contact-bar.component.scss']
})
export class ContactBarComponent {

	contacts: Contact[] = [
		{
			name: 'Yed',
			network: '../assets/slack_logo.png',
			pending_message: 4,
			messages: []
		},
		{
			name: 'Yedd',
			network: '../assets/discord_logo.png',
			pending_message: 1,
			messages: []
		},
		{
			name: 'Yeddd',
			network: '../assets/yammer_logo.png',
			pending_message: 2,
			messages: []
		},
		{
			name: 'Yedddd',
			network: '../assets/mail_logo.png',
			pending_message: 0,
			messages: []
		},
		{
			name: 'Yeddddd',
			network: '../assets/yammer_logo.png',
			pending_message: 0,
			messages: []
		},
	]

	active: number = Math.round(Math.random() * 100 % (this.contacts.length - 1));
}
