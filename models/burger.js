// Import the ORM to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
    // Displaying all burgers in the db
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays 
    // Adding one burger to the db
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    // Updating devoured value to true
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    // Deleting a burger 
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res);
        });
    }
};

// Export burger.js 
module.exports = burger;