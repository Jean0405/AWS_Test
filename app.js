import express from "express";
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo <3!');
});

app.post('/users/:id', (req, res) => {
    res.send(req.params.id);
});

export const handler = serverless(app);