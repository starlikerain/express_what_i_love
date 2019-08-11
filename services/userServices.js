const User = require('../models/mongoose/User');

module.exports.insertUser = async (name, age) => {
    return User.insert(name, age);
};

module.exports.listUsers = async () => {
    return User.list();
};