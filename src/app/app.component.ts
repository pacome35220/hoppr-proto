import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'hoppr-proto';
	isLogin = false;
	name: string;

	login(form: NgForm) {
		if (form.value.name && form.value.name.length) {
			this.name = form.value.name;
			this.isLogin = true;
		}
	}
}
