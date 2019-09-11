import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from '../socket.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

	@Input() messages: Message[] = []

	send(form: NgForm) {
		if (form.value.message.match(/\S/)) {
			this.messages.push({
				message: form.value.message,
				mine: true
			})
			form.reset()
		}
	}
}
