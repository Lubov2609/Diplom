var knex = require('./db.js');

function Years() {
    return knex('years');
}

// *** queries *** //

function getAll() {
    return Years().select();
}

// function getYears(showID) {
//     return Years().where('id',parseInt(showID)).first();
// }
// function add(year) {
//     return Years().insert(year, 'id');
// }
module.exports = {
    getAll: getAll,
    // getYears:getYears,
    // add:add
};