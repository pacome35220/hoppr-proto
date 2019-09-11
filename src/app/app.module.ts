import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactBarComponent } from './contact-bar/contact-bar.component';
import { PopupContactComponent } from './contact-bar/popup-contact/popup-contact.component';
import { ChatComponent } from './chat/chat.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:8080', options: {} };

@NgModule({
	declarations: [
		AppComponent,
		ContactBarComponent,
		ChatComponent,
		PopupContactComponent
	],
	imports: [
		FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatSidenavModule,
		MatDividerModule,
		MatListModule,
		MatButtonModule,
		MatToolbarModule,
		MatBadgeModule,
		MatDialogModule,
		SocketIoModule.forRoot(config)
	],
	entryComponents: [PopupContactComponent],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
