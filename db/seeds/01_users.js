const tableNames = require('../../src/constants/tableNames');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tableNames.user).del()
    .then(function () {
      
    });
};
