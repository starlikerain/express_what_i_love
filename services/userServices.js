const User = require('../models/in_memo/User');

module.exports.insertUser = (firstName, lastName, age) => {
    return User.insert(firstName, lastName, age)
};

module.exports.listUsers = () => {
    return User.list();
};