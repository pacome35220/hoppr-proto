import { Component, Input, OnInit } from '@angular/core';
import { Contact, generateRandomNetwork, SocketService } from '../socket.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupContactComponent } from './popup-contact/popup-contact.component';

@Component({
	selector: 'app-contact-bar',
	templateUrl: './contact-bar.component.html',
	styleUrls: ['./contact-bar.component.scss']
})
export class ContactBarComponent implements OnInit {

	@Input() name: string;
	contacts: Contact[] = [];

	active: number = Math.round(Math.random() * 100 % (this.contacts.length - 1));

	constructor(public dialog: MatDialog,
		public socketService: SocketService) {}

	openDialog() {
		const userlist: Contact[] = [{
			name: 'marco',
			network: generateRandomNetwork(),
			pending_message: 4
		}]
		const dialogRef = this.dialog.open(PopupContactComponent, {
			width: '250px',
			data: userlist
		});

		dialogRef.afterClosed().subscribe((userSelected: Contact) => {
			console.log('userSelected: ', userSelected);
			this.contacts.push(userSelected);
		});
	}

	switchContact(contact_index: number) {
		this.active = contact_index;
	}

	ngOnInit() {
		this.socketService.connect(this.name);
	}
}
