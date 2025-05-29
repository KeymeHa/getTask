import axios from 'axios';
import { Task } from '../interfaces/Task';

const FIREBASE_URL = 'https://tu-proyecto.firebaseio.com/tasks';

export class TodoClient {
  static async getTasks(): Promise<Task[]> {
    const response = await axios.get(`${FIREBASE_URL}.json`);
    const data = response.data;
    if (!data) return [];
    return Object.entries(data).map(([id, task]: [string, any]) => ({
      id,
      title: task.title,
      description: task.description,
      completed: task.completed,
    }));
  }

  static async createTask(task: Omit<Task, 'id'>): Promise<Task> {
    const response = await axios.post(`${FIREBASE_URL}.json`, task);
    return { id: response.data.name, ...task };
  }

  static async updateTask(id: string, task: Partial<Omit<Task, 'id'>>): Promise<void> {
    await axios.patch(`${FIREBASE_URL}/${id}.json`, task);
  }

  static async deleteTask(id: string): Promise<void> {
    await axios.delete(`${FIREBASE_URL}/${id}.json`);
  }
}
