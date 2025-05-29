import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestión de Tareas',
      version: '1.0.0',
      description: 'API para gestionar tareas, Elaborado por: Eyleen Paola Polo Carranza, Kevin Antonio Bolaño ariza',
    },
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };
