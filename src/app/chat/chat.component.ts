import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message, SocketService } from '../socket.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	messages: Message[] = [{
		message: 'Welcome !',
		mine: false
	}];

	constructor(private socket: SocketService) { }

	send(form: NgForm) {
		if (form.value.message.match(/\S/)) {
			console.log(form.value.message);
			this.messages.push({
				message: form.value.message,
				mine: true
			});
			this.socket.sendMessage(form.value.message);
			form.reset();
		}
	}

	ngOnInit() {
		this.socket.getMessages().subscribe((message: Message) => {
			console.log('receive: ', message);
			this.messages.push(message);
		});
	}
}
