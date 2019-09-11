import { Component, OnInit } from '@angular/core';

interface Message {
	message: string;
	mine: boolean
}

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	messages: Message[] = [
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

	constructor() { }

	send(event) {

	}

	ngOnInit() {
	}

}
