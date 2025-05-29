import { db } from '../config/firebase';
import { Task } from '../interfaces/Task';

const tasksCollection = db.collection('tasks');

export class TodoPersistence {
  static async createTask(task: Omit<Task, 'id'>): Promise<Task> {
    const docRef = await tasksCollection.add(task);
    return { id: docRef.id, ...task };
  }

  static async getTasks(): Promise<Task[]> {
    const snapshot = await tasksCollection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Task));
  }

  static async updateTask(id: string, updates: Partial<Task>): Promise<void> {
    const taskRef = tasksCollection.doc(id);
    await taskRef.update(updates);
  }

  static async deleteTask(id: string): Promise<void> {
    const taskRef = tasksCollection.doc(id);
    await taskRef.delete();
  }
}
