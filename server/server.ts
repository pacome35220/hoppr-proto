import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { Message } from '../src/app/socket.service';

const app: express.Application = express();
const server: Server = createServer(app);
const io: SocketIO.Server = socketIo(server);
const port: number = parseInt(process.env.PORT) || 8080;

server.listen(port, () => {
	console.log(`Running server on port ${port}`);
});

io.on('connect', socket => {
	console.log(`Connected client on port ${port}`);
	socket.on('message', (message: Message) => {
		console.log('[server](message): %s', JSON.stringify(message));
		io.emit('message', message);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
});
