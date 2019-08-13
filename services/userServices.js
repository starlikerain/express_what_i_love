const User = require('../models/mongoose/User');
const Subscription = require('../models/mongoose/subscription');

module.exports.insertUser = async (name, age) => {
    return User.insert(name, age);
};

module.exports.listUsers = async () => {
    return User.list();
};

module.exports.createSubscription = async (userId, url) => {
    const user = await User.getOneById(userId);
    if (!user) throw Error('没有找到这个用户id');
    return Subscription.insert(userId, url); // await
};