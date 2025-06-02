import express from 'express';
import tasksRouter from './src/routes/tasks';
import { swaggerUi, swaggerSpec } from './src/config/swagger';
import cors from 'cors';


const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use('/api/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
