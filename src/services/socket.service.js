import io from 'socket.io-client';

// eslint-disable-next-line import/no-mutable-exports
let socket;

// eslint-disable-next-line camelcase
const connectSocket = (user_id) => {
  socket = io('http://localhost:8000', {
    // eslint-disable-next-line camelcase
    query: `user_id = ${user_id}`,
    reconnectionDelayMax: 10000,
  });
}; // Add this -- our server will run on port 4000, so we connect to it from here

export { socket, connectSocket };
