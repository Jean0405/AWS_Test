import express from "express";
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo <3!');
});

export const handler = serverless(app);