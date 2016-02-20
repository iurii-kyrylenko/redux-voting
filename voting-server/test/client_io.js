import io from 'socket.io-client';

const socket = io('http://localhost:8090');

socket.on('connect', () => {
    console.log("socket connected");
});

socket.on('state', (data) => {
    console.log('state:', data);
});

// socket.emit('action', {type: 'SET_ENTRIES', entries: ['a', 'b']});
