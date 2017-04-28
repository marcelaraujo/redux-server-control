import io from 'socket.io-client'
let socket = io('http://localhost')

function emitActionToServer(data) {
    socket.emit('event_from_client', 1)
}
