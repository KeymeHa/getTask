import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

const serviceAccountPath = path.resolve(__dirname, 'firebase.json');

if (!fs.existsSync(serviceAccountPath)) {
  console.error('\n❌ Archivo de credenciales de Firebase no encontrado: firebaseServiceAccountKey.json');
  process.exit(1);
}

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf-8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
