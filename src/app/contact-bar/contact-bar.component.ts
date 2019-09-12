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
		this.socketService.getUserList(this.name).subscribe((userList: Contact[]) => {
			const dialogRef = this.dialog.open(PopupContactComponent, {
				width: '250px',
				data: userList.filter(x => x.name !== this.name)
			});

			dialogRef.afterClosed().subscribe((userSelected: Contact) => {
				if (userSelected) {
					console.log('userSelected: ', userSelected);
					this.contacts.push(userSelected);
				}
			});
		});
	}

	switchContact(contact_index: number) {
		this.active = contact_index;
	}

	ngOnInit() {
		this.socketService.connect(this.name);
	}
}
