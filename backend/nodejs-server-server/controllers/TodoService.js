'use strict';

var utils = require('../utils/writer.js');
var TodoService = require('../service/TodoServiceService');

module.exports.todoGET = function todoGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  TodoService.todoGET(limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todoIdDELETE = function todoIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  TodoService.todoIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todoIdGET = function todoIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  TodoService.todoIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todoIdPATCH = function todoIdPATCH (req, res, next) {
  var id = req.swagger.params['id'].value;
  var request = req.swagger.params['request'].value;
  TodoService.todoIdPATCH(id,request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.todoPOST = function todoPOST (req, res, next) {
  var request = req.swagger.params['request'].value;
  TodoService.todoPOST(request)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
