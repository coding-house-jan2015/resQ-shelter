'use strict';

var active = require('../../views/helpers/active');
var Client = require('../../models/client');

module.exports = {
  handler: function(request, reply) {
    Client.findOne({_id:request.params.clientId}).populate('pets').exec(function(err, client) {
      reply.view('templates/clients/show', {path:'/clients', active:active, client:client});
    });
  }
};
