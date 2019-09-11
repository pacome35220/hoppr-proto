import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { Network } from '../src/app/socket.service'

interface User {
	channels: Channel[];
	name: string;
	network: Network;
}

interface Channel {
	messages: Message[];
	sender: string;
	network: Network;
}

export interface Message {
	text: string;
	mine: boolean;
}

const app: express.Application = express();
const server: Server = createServer(app);
const io: SocketIO.Server = socketIo(server);
const port: number = parseInt(process.env.PORT) || 8080;

var users: User[];

server.listen(port, () => {
	console.log(`Running server on port ${port}`);
});

io.on('connect', socket => {
	console.log(`Connected client on port ${port}`);

	socket.on('askUserList', (name: string) => {
		console.log(`${name} ask for user list`);
		io.emit('userList', users);
	});

	socket.on('newUser', (user: User) => {
		console.log(`new channel of ${user.name} from ${user.network}`);
		users.push(user);
		// io.emit('newChannel', message);
	});

	socket.on('message', (message: Message) => {
		console.log('[server](message): %s', JSON.stringify(message));
		// io.emit('message', message);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
});
