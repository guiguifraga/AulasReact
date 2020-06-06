import express from 'express';

const app = express();
app.use(express.json());

const users = ['Guilherme', 'Rhemerson', 'Rafael', 'Marcelo', 'Adilson'];

app.get('/users', (request, response) => {
  const search = String(request.query.search);
  const filteredUsers = request.query.search
    ? users.filter((user) => user.includes(search))
    : users;
  return response.json(filteredUsers);
});

//request.params = pega as informações após o parametro (na rota vem após o ":");
//queryparm = são parametros opcionais
//RequestBody = são parametros para criação/atualização de informações.

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  const user = users[id];
  return response.json(user);
});

app.post('/users', (request, response) => {
  const data = request.body;
  const user = {
    nome: data.name,
    email: data.email,
  };
  return response.json(user);
});

app.listen(3333);
