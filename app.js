import express from "express";
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo <3!');
});

app.post('/users/:id', (req, res) => {
    if (req.params.id === 1) {
        res.send('Keanon Jeanpierre Angarita Olarte');
    }else{
        res.send('No existe');
    }
});

export const handler = serverless(app);