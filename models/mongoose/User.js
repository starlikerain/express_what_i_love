const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    name: {type: String, require: true, unique: true, index: 1},
    age: {type: Number, max: 188, min: 0},
});

const userModal = mongoose.model('user', UserSchema);

async function insert(user) {
    return userModal.create(user);
}

async function getOneById(id) {
    return userModal.findOne({_id: id,});
}

async function getOneByName(name) {
    return userModal.findOne({name});
}

async function list(params) {
    const filter = {};
    const flow = userModal.find(filter);
    return flow.exec(); // 这里返回的是一个 await 异步
}

module.exports = {
    insert,
    getOneById,
    getOneByName,
    list
};

