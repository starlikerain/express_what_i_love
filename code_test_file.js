const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId
const userSchema = new Schema({
    name: {type: String, require: true, unique: true, index: 1},
    age: {type: Number, max: 188, min: 0}
});
const uri = `mongodb://localhost:27017/what_i_love`;
const connection = mongoose.connect(uri);
const userModal = mongoose.model('user', userSchema);
const db = mongoose.connection;

db.on('open', () => {
    console.log('来了！');
});
db.on('error', e => {
    console.log(`出错了！！！${e}`);
});

(async () => {
    return await userModal.create({
        name: "小渣渣",
        age: 18
    });
})()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });