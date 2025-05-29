import express from 'express';
import tasksRouter from './routes/tasks';
import { swaggerUi, swaggerSpec } from './config/swagger';


const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
  console.log(`Documentación Swagger disponible en http://localhost:${PORT}/api-docs`);
});