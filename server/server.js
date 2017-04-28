import express from 'express'
import socketIO from 'socket.io'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import path from 'path'
// import {RANDOM_ACTION} from '../common/actions'

const app = express()
const server = require('http').Server(app)
const io = socketIO(server)
const port = 8080
const staticFolder = path.join(__dirname, '../dist')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.disable('x-powered-by')
app.use(express.static(staticFolder))

app.get('/', function (req, res) {
	res.sendFile(staticFolder + '/index.html')
})

server.listen(port, () => {
	console.log(`> App is listening on ${port}.`)
})

io.on('connection', socket => {
	console.log('connection')
	socket.on('event_from_client', data => {
		let action = {
			type: 'RANDOM_ACTION',
			payload: {
				number: Math.random()
			}
		}
		socket.broadcast.emit('event_from_server', action)
	})
	
	console.log('a user connected')
	socket.on('disconnect', function () {
		console.log('user disconnected')
	})
})
