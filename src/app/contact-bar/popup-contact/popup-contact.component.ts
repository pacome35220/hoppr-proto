import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from 'src/app/socket.service';

@Component({
	selector: 'popup-contact',
	templateUrl: 'popup-contact.component.html',
	styleUrls: ['./popup-contact.component.scss']

})
export class PopupContactComponent {

	constructor(
		public dialogRef: MatDialogRef<PopupContactComponent>,
		@Inject(MAT_DIALOG_DATA) public userlist: Contact[]) {}

	close() {
		this.dialogRef.close();
	}

}
