require('../db/mongodb')
const Todo = require('./todo')

Todo.findByIdAndUpdate('5f39b27b7f3e084dcee72187', { description: 'modified' }, { new: true }).then((todo) => {
    console.log(todo)
}).catch((error) => {
    console.log(error)
})

Todo.findByIdAndDelete('5f39b27b7f3e084dcee72187').then((todo) => {
    console.log(todo)
}).catch((error) => {
    console.log(error)
})

Todo.findById('5f39c26b90854aabbe1534ca').then((todo) => {
    console.log(todo)
}).catch((error) => {
    console.log(error)
})