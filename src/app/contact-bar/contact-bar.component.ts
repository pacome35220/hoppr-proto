import { Component, Input, Inject } from '@angular/core';
import { Contact, Network } from '../socket.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupContactComponent } from './popup-contact/popup-contact.component';

@Component({
	selector: 'app-contact-bar',
	templateUrl: './contact-bar.component.html',
	styleUrls: ['./contact-bar.component.scss']
})
export class ContactBarComponent {

	@Input() name: string;
	contacts: Contact[] = [];

	active: number = Math.round(Math.random() * 100 % (this.contacts.length - 1));

	constructor(public dialog: MatDialog) { }

	private generateRandomNetwork(): string {
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

	openDialog() {
		const dialogRef = this.dialog.open(PopupContactComponent, {
			width: '250px',
			data: ['mdr', 'lol']
		});

		dialogRef.afterClosed().subscribe(userSelected => {
			console.log('userSelected: ', userSelected);
			this.contacts.push({
				name: userSelected,
				network: this.generateRandomNetwork(),
				pending_message: Math.round(Math.random() * 100 % 5)
			});
		});
	}

	switchContact(contact_index: number) {
		this.active = contact_index;
	}
}
