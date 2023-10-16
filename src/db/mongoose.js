const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL).catch((error)=>{
    console.log("could not connect to mongoose")
})



// const me = new User({
//     name: '   Karteke',
//     email: 'kartekerawal80@gmail.com',
//     password: 'coolo123'
// })
// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })


// const task = new Task({
//     description: 'Learn the mongoose library',
//     completed: false
// })
// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })