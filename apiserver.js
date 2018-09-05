const http = require('http');
const todos = require('./data/todos');

http.createServer((req, res) => {
  if (req.url ===  '/todos'){
    res.writeHead(200, { 'Content-type': 'application/json; charset = utf-8' });
    res.end(JSON.stringify(todos));
  }
  else if (req.url === '/todos/completed'){
    const completed = todos.filter(todo => todo.completed);

    res.writeHead(200, { 'Content-type': 'application/json; charset = utf-8' });
    res.end(JSON.stringify(completed));
  }
  else if (req.url.match('/\/todos\/\d+/')){

    const id = parseInt(req.url.replace(/\D+/, ''));
    const todo = todos.find(todo => todo.id === id);

    if (!todo) {
      res.writeHead(404, { 'Content-type': 'text/plain' });
      res.end(`Todo with that id ${id} hasn't found`);
    } else {
      res.writeHead(200, { 'Content-type': 'application/json; charset = utf-8' });
      res.end(JSON.stringify(todo));
    }
  }
  else {
    res.writeHead(404, { 'Content-type': 'text/plain' });
    res.end(`404 not found----`);
  }
}).listen(3000, () => console.log('Server listening'));