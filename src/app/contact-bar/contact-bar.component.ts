import { Component, Input } from '@angular/core';
import { Contact } from '../socket.service';

@Component({
	selector: 'app-contact-bar',
	templateUrl: './contact-bar.component.html',
	styleUrls: ['./contact-bar.component.scss']
})
export class ContactBarComponent {

	@Input() name: string;
	contacts: Contact[] = [];

	active: number = Math.round(Math.random() * 100 % (this.contacts.length - 1));

	switchContact(contact_index: number) {
		this.active = contact_index;
	}
}
