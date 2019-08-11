const mongoose = require('mongoose');
mongoose.Promise = Promise;
const uri = `mongodb://localhost:27017/what_i_love`;

mongoose.connect(uri)
    .then(r => console.log(`这是 mongoose.connect 返回的 promise: ${r}`));

const db = mongoose.connection;
db.on('open', () => {
    console.log('来了！连接了！');
});

db.on('error', e => {
    console.log(`出错了！！！${e}`);
});

