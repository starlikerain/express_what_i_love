const mongoose = require('mongoose');
const {Schema} = mongoose;
const {ObjectId} = mongoose.Types;

const subSchema = new Schema({
    userId: {type: ObjectId, require: true, index: 1},
    url: {type: String, require: true},
});
const subModel = mongoose.model('Sub', subSchema);

async function insert(Sub, url) {
    let a = ObjectId(Sub.toString());
    let instance_subSchema = {
        userId: new ObjectId({_id: Sub.toString()}), //TODO 之后再处理这里的bug
        url
    };
    return subModel.create(Sub);
}

async function findByUserId(id) {
    return subModel.findOne({_id: id});
}

async function list() {
    const filter = {};
    const flow = subModel.find(filter);
    return flow.exec(); // 这个 flow.exec 是异步返回结果的 (await)
}

module.exports = {
    insert,
    findByUserId,
    list
}
;
// ----------------------------------------------------分割线-----------------------------------------------------------
// let subscriptions = [];
//
// class Subscription {
//     constructor(userId, url) {
//         this.userId = userId;
//         this.url = url;
//     }
//
//     static list() {
//         return Subscription.subscriptions;
//     }
//
//
//     // 这里尝试一下高级语法
//     static get ['subscriptions']() {
//         return subscriptions;
//     }
//
//     static insert(userId, url) {
//         const sub = new Subscription(userId, url);
//         Subscription.subscriptions.push(sub);
//         return sub;
//     }
//
//     static findOneByUserId(userId) {
//         return Subscription.subscriptions.map(T => T.userId === userId);
//     }
//
// }
//
// module.exports = Subscription;

// Subscription.subscription = [];