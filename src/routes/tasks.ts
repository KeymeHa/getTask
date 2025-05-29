import express from 'express';
import { TodoClient } from '../services/TodoClient';
import { Task } from '../interfaces/Task';

const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Listar todas las tareas
 *     responses:
 *       200:
 *         description: Listar todas las tareas
 */
router.get('/', async (req, res) => {
  const tasks = await TodoClient.getTasks();
  res.json(tasks);
});

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Tarea creada exitosamente
 *       400:
 *         description: Error al procesar la petición
 *       404:
 *         description: No se encontro el id de la tarea solicitada
 *       500:
 *          description: Error en el servidor
 */
router.post('/', async (req, res) => {
  const newTask: Omit<Task, 'id'> = req.body;
  const createdTask = await TodoClient.createTask(newTask);
  res.status(201).json(createdTask);
});

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Actualizar una tarea
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la tarea a actualizar
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tarea 
 *       400:
 *         description: Error al procesar la petición
 *       404:
 *         description: No se encontro el id de la tarea solicitada
 *       500:
 *          description: Error en el servidor
 */
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  await TodoClient.updateTask(id, updates);
  res.json({ message: 'Tarea actualizada de manera exitosa' });
});

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id de la tarea a eliminar
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Tarea eliminada
 *       400:
 *         description: Error al procesar la petición
 *       404:
 *         description: No se encontro el id de la tarea solicitada
 *       500:
 *          description: Error en el servidor
 */
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await TodoClient.deleteTask(id);
  res.status(204).send();
});

export default router;
