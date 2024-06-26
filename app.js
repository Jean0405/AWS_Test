import express from "express";
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo <3!');
});

app.post('/users/:id', (req, res) => {
    res.send("User: " + req.params.id + " agregado");
});

app.put('/users/:id', (req, res) => {
    res.send("User: " + req.params.id + " actualizado");
});

export const handler = serverless(app);