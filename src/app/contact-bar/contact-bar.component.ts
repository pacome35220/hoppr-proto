import { Component } from '@angular/core';

interface Contact {
	name: string;
	network: string;
	pending_message: number;
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
			pending_message: 4
		},
		{
			name: 'Yedd',
			network: '../assets/discord_logo.png',
			pending_message: 1
		},
		{
			name: 'Yeddd',
			network: '../assets/yammer_logo.png',
			pending_message: 2
		},
		{
			name: 'Yedddd',
			network: '../assets/mail_logo.png',
			pending_message: 0
		},
		{
			name: 'Yeddddd',
			network: '../assets/yammer_logo.png',
			pending_message: 0
		},
	]

	active: number = Math.round(Math.random() * 100 % this.contacts.length - 1);
}
