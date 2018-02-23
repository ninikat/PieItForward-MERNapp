'use strict';
module.exports = function(app) {
  var userList = require('../controllers/controller');
  var pizzaList = require('../controllers/pizzaController');

  // user Routes
  app.route('/users')
     .get(userList.list_all_users)
     .post(userList.create_a_user);


  app.route('/users/:userId')
    // .get(todoList.read_a_task)
    // .put(todoList.update_a_task)
    // .delete(todoList.delete_a_task);

  app.route('/pizzaslices')
         .get(pizzaList.list_all_slices)
         .post(pizzaList.create_a_slice);


  app.route('/slices/:sliceId')
    // .get(todoList.read_a_task)
    // .put(todoList.update_a_task)
     .delete(pizzaList.deleteSlice);


};

// module.exports = function(app) {
//   var pizzaList = require('../controllers/pizzaController');
//
//   // user Routes
//   app.route('/pizzaslices')
//      .get(pizzaList.list_all_slices)
//      .post(userList.create_a_slice);
//
//
//   app.route('/slices/:sliceId')
//     // .get(todoList.read_a_task)
//     // .put(todoList.update_a_task)
//     // .delete(todoList.delete_a_task);
// };
