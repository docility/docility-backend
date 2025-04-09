import type { Core } from '@strapi/strapi';
const { Server } = require('socket.io');
export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {

    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "*", // Replace with your frontend URL(s) for security
        methods: ["GET", "POST"],
      },
    });

    // Store connected clients with their IP as the key
    const clients = new Map();

    io.on('connection', (socket) => {
      // Extract client IP address
      const userId = socket.handshake.auth.userId;
      console.log(socket.handshake)
      // const normalizedIp = userId.split(':').pop(); // Normalize IP (remove IPv6 prefix)

      console.log(`New client connected from IP: ${userId}`);

      // Associate the IP with the socket ID
      clients.set(userId, socket.id);
      console.log('Clients:', clients);

      // Handle disconnection
      socket.on('disconnect', () => {
        console.log(`Client disconnected from IP: ${userId}`);
        clients.delete(userId); // Remove the client from the map
      });
    });

    strapi.io = io; // Attach Socket.IO instance to Strapi
    strapi.io.clients = clients; // Attach the clients map to strapi.io
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
 
  bootstrap({ strapi }) {

    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "*", // Replace with your frontend URL(s) for security
        methods: ["GET", "POST"],
      },
    });

    // Store connected clients with their IP as the key
    const clients = new Map();

    io.on('connection', (socket) => {
      // Extract client IP address
      const userId = socket.handshake.auth.userId;
      console.log(socket.handshake)
      // const normalizedIp = userId.split(':').pop(); // Normalize IP (remove IPv6 prefix)

      console.log(`New client connected from IP: ${userId}`);

      // Associate the IP with the socket ID
      clients.set(userId, socket.id);
      console.log('Clients:', clients);

      // Handle disconnection
      socket.on('disconnect', () => {
        console.log(`Client disconnected from IP: ${userId}`);
        clients.delete(userId); // Remove the client from the map
      });
    });

    strapi.io = io; // Attach Socket.IO instance to Strapi
    strapi.io.clients = clients; // Attach the clients map to strapi.io
  },
};
