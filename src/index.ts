import { Server } from 'socket.io';


export default {
  register({ strapi }: { strapi }) {
    // Optional: You can still define the property so it's ready to be used later
    strapi.io = {} as any;
  },

  bootstrap({ strapi }: { strapi}) {
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: '*', // Replace with your frontend domain(s) in production
        methods: ['GET', 'POST'],
      },
    });

    const clients = new Map();

    io.on('connection', (socket) => {
      const userId = socket.handshake.auth.userId;
      console.log('Socket Handshake:', socket.handshake);

      console.log(`New client connected with ID: ${userId}`);

      clients.set(userId, socket.id);
      console.log('Current Clients:', clients);

      socket.on('disconnect', () => {
        console.log(`Client disconnected: ${userId}`);
        clients.delete(userId);
      });
    });

    strapi.io = io;
    strapi.io.clients = clients;

    console.log('✅ Socket.IO is initialized and attached to strapi.io');
  },
};
