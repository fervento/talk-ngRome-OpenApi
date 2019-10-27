'use strict';


/**
 * List of Todo
 * Unfiltered list of Todo 
 *
 * limit Integer 
 * returns List
 **/
exports.todoGET = function(limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "text" : "Buy groceries",
  "done" : false
}, {
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "text" : "Buy groceries",
  "done" : false
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a Todo by it's id
 * 
 *
 * id UUID the todo identifier
 * no response value expected for this operation
 **/
exports.todoIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrieves a Todo by it's ID
 * 
 *
 * id UUID the todo identifier
 * returns Todo
 **/
exports.todoIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "text" : "Buy groceries",
  "done" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a Todo by it's ID
 * 
 *
 * id UUID the todo identifier
 * request Todo 
 * returns Todo
 **/
exports.todoIdPATCH = function(id,request) {
  return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
//   "text" : "Buy groceries",
//   "done" : false
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
     resolve(request);
  });
}


/**
 * Create new Todo
 * Receives a todo object without id and persits it, returns the todo with id
 *
 * request Todo 
 * returns Todo
 **/
exports.todoPOST = function(request) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "text" : "Buy groceries",
  "done" : false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

