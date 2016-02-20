import Server from 'socket.io';

export function startServer(store) {

    const io = new Server().attach(8090);

    console.log('listening on 8090...');

    io.on('connection', (socket) => {
        console.log('got connection!');
        socket.emit('state', store.getState());

        socket.on('action', store.dispatch.bind(store));

        /* less intricate: 
        socket.on('action', (action) => {
            console.log('action:', action);
            store.dispatch(action);
        });
        */
    });

    store.subscribe(() => {
        io.emit('state', store.getState());
    });
}

/**
 * regular sockets -- works via TCP
 *
import {createServer} from 'net';

export function startServer(store) {
    const server = createServer((socket) => {
        console.log('got connection!');
    });
    server.listen(8090, () => {
        console.log('listening on 8090...');
    });
}
*/