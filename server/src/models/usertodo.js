const mongoose = require('mongoose');
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/todo-app', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    }
})


const userSchema = new Schema(    {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (validator.isEmail(value)) {
                console.log('success')
            }
        }
    },
    password: {
        type: String,
        required: true
    },
    todos: [todoSchema]
})

const userModel = mongoose.model('user', userSchema)
const todoModel = mongoose.model('todo', todoSchema)


// const user = new userModel({
//     name: 'Sam',
//     email: 'sam@gmail.com',
//     password: 'asdsfsedfs',
// })

// user.todos.push({description: 'adding todo with user'})

// user.save().then(() => {
    
//         console.log(user)
    
// }).catch((error) => {
//     console.log(error)
// })

module.exports = {
    userModel,
    todoModel
};

