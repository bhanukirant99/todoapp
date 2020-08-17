const mongoose = require('mongoose');
import React from 'react';
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/todo-app', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         validate(value) {
//             if (validator.isEmail(value)) {
//                 console.log('success')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// const user = new User({
//     name: 'Sam',
//     email: 'sam@gmail.com',
//     password: 'asdsfsedfs'
// })

// user.save().then(() => {
//     console.log(user)
// }).catch((error) => {
//     console.log(error)
// })

module.exports = mongoose;