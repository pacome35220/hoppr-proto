import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface Message {
	message: string;
	mine: boolean
}

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

	@Input() messages: Message[] = [
		{
			message: 'Hello !',
			mine: false
		},
		{
			message: 'Hello, how are you ?',
			mine: true
		},
		{
			message: 'Fine !',
			mine: false
		}
	]

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