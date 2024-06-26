import express from "express";
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo <3!');
});

app.get('/users', (req, res) => {
  res.send('Keanon Jeanpierre Angarita Olarte');
});

export const handler = serverless(app);