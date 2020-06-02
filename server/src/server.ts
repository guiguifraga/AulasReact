import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de Users');
  response.json([
    {
      name: 'Guilherme Fraga',
      age: 25,
      city: 'Serra',
    },
    {
      name: 'Alexandre Pizzani',
      age: 35,
      city: 'Vitória',
    },
    {
      name: 'Rhemerson Reis',
      age: 34,
      city: 'Serra',
    },
  ]);
});

app.listen(3333);
