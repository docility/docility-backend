// src/utils/socket.js
const emitMessageToClient = (strapi, userId, event, message) => {
  const id = strapi.clients.get(parseInt(userId))
  if (id) {
    strapi.to(id).emit(event, message);
    console.log(`Message sent to client with socket ID: ${id}`);
  } else {
    console.log("Client is not connected");
  }
};

export default emitMessageToClient;
 