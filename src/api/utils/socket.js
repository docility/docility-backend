// src/utils/socket.js
const emitMessageToClient = (io, userId, event, message) => {
  const id = io.clients.get(parseInt(userId))
  if (id) {
    io.to(id).emit(event, message)
    console.log(`Message sent to client with socket ID: ${id}`)
  } else {
    console.log('Client is not connected')
  }
}

module.exports = emitMessageToClient
