var api = require('./api.js').app;
var users = require('./users.json');

api.get('/', function(request, response) {
  response.json("node.js backend");
});

api.get('/users', function(request, response) {
  response.json(users);
});

api.put('/users', function(request, response) {
  users[users.length] = request.body;
  response.json('User was saved succesfully');
});


api.delete('/users/:index', function(request, response) {
  users.splice(request.params.index, 1);
  response.json('User with index ' + request.params.index + ' was deleted');
});

api.put('/users/update/', function(request, response) {

  index=Number(request.body.index);
  users[index].name = request.body.name;
  users[index].city = request.body.city;
  response.json('User with index ' + request.body.index + ' was updated: '+ users[index].name);

});

api.listen(3000, function(){
  console.log('CORS-enabled web server is listening on port 3000...');
});