const mongoose = require('mongoose');
const User = require('./User');

mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0/testdb/test', 
    () =>{
        console.log('connected')
    },
    e => console.error(e)
);

// const user = new User({ name: 'Arshad', age: 26});
// user.save().then(()=> console.log('user saved'));

run();

async function run(){
    const user = new User({ name: 'Arshad', age: 26});
    await user.save();
    console.log(user);
}