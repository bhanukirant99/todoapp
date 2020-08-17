const mongoose = require('mongoose');
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('invalid Email')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Invalid Password')
            }
        }
    }
})

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

module.exports = User;