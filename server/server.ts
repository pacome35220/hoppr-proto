import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { Network, generateRandomNetwork } from '../src/app/socket.service'

interface User {
	name: string;
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

var users: User[] = [];

server.listen(port, () => {
	console.log(`Running server on port ${port}`);
});

io.on('connect', socket => {
	console.log(`Connected client on port ${port}`);

	socket.on('askUserList', (name: string) => {
		console.log(`${name} ask for user list`);
		socket.emit('userList', users.map(x => {
			return {
				name: x.name,
				network: generateRandomNetwork()
			}
		}));
	});

	socket.on('newUser', (user: User) => {
		console.log(`new channel of ${user.name} from ${user.network}`);
		if (!users.map(x => x.name).includes(user.name))
			users.push(user);
	});

	socket.on('message', (message: Message) => {
		console.log('[server](message): %s', JSON.stringify(message));
		socket.broadcast.emit('message', message);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
});
