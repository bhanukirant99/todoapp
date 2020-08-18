const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
// const database = require('./src/models/user');
const User = require('./models/user');
const Todo = require('./models/todo');
const mongoose = require('./db/mongodb');
const { todoModel, userModel } = require('./models/usertodo');


const app = new express();

app.use(bodyParser.json());
app.use(cors());

// const database = {
//     users: [
//         {
//             id: '101',
//             name: 'Raj',
//             email: 'raj@gmail.com',
//             password: 'raj',
//             entries: 0,
//             joined: new Date(),
//             todos: [],
//         },
//         {
//             id: '102',
//             name: 'Ram',
//             email: 'ram@gmail.com',
//             password: 'ram',
//             entries: 0,
//             joined: new Date(),
//             todos: [],
//         },
//     ]
// }

app.get('/', (req, res) => {
    res.send('running')
});

app.get('/users', async(req, res) => {
    try {
        const users = await userModel.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})

app.get('/users/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const user = await userModel.findById(_id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }

    // const _id = req.params.id
    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})

app.get('/todos', async(req, res) => {
    try { 
        const todos = await userModel.todos.find({})
        res.send(todos)
    } catch(e) {
        res.status(500).send()
    }
    // Todo.find({}).then((todos) => {
    //     res.send(todos)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})

app.get('/todos/:id', async(req, res) => {
    const _id = req.params.id
    try {
        const todo = await Todo.findById(_id)
        if(!todo) {
            return res.status(404).send()
        }
        res.send(todo)
    } catch (e) {
        res.status(500).send()
    }
    // const _id = req.params.id
    // Todo.findById(_id).then((todo) => {
    //     if (!todo) {
    //         return res.status(404).send()
    //     }
    //     res.send(todo)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
})


// app.post('/signin', async(req, res) => {
//     const email = req.body.email
//     console.log(req.body)
//     User.findOne({email: email}).then((user) => {
//         console.log(user)
//         try {
//             if(bcrypt.compareSync(req.body.password, user.password)) {
//             // if(req.body.password === user.password) {
//                 res.send(user)
//             } else {
//                 res.send('Invalid password')
//             }
            
//         } catch (e) {
//             res.status(404).send()
//         }
//     })
    // console.log(user.mode)
    // try {
    //     if (!user) {
    //         return res.status(404).send()
    //     } 
    //     if(bcrypt.compareSync(req.body.password, user.password)) {
    //     // if(req.body.password === user.password) {
    //         res.send('success')
    //     } else {
    //         res.send('Invalid password')
    //     }
        
    // } catch (e) {
    //     res.status(404).send()
    // }
    // const _id = req.params.id
    // User.findOne({email: email}).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    //     console.log(user)
    // }).catch((error) => {
    //     res.status(500).send()
    // })
// });

app.get('/signin/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((error) => {
        res.status(500).send()
    })
});

// app.post('/signin', (req, res) => {
//     if (req.body.email === database.users[0].email && 
//         req.body.password === database.users[0].password){
//             res.json('success');
//             console.log('success')
//     } else {
//             res.status(400).json('error while signing in!, please register');
//             console.log('error')
//     }
//     res.json('signing');
// });

// app.post('/register', (req, res) => {
//     const { name, email, password } = req.body;
//     bcrypt.hash(password, null, null, function(err, hash) {
//         console.log(hash);
//     });
//     database.push({
//             id: '103',
//             name: name,
//             email: email,
//             entries: 0,
//             joined: new Date(),
//     })
//     res.json(database.users[database.length-1]);
// });

// app.post('/register', async(req, res) => {
//    try {
//        const hashedPassword = await bcrypt.hash(req.body.password, 10)
//        const user = new User({
//             name: req.body.name,
//             email: req.body.email,
//             password: hashedPassword
//         })
//        user.save()
//        res.status(201).send(user)
//    } catch(e) {
//        res.status(400).send(e)
//    }
// //    user.save().then(() => {
// //        res.send(user)
// //    }).catch((error) => {
// //        res.status(400).send(error.message)
// //    })
// });

app.post('/register', async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new userModel({
             name: req.body.name,
             email: req.body.email,
             password: hashedPassword
         })
        // user.todos.push({description: req.body.description})
        user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)
    }
 });

app.post('/signin', async(req, res) => {
    const email = req.body.email
    console.log(req.body)
    userModel.findOne({email: email}).then((user) => {
        console.log(user)
        try {
            if(bcrypt.compareSync(req.body.password, user.password)) {
            // if(req.body.password === user.password) {
                res.send(user)
            } else {
                res.send('Invalid password')
            }
            
        } catch (e) {
            res.status(404).send()
        }
    })
});

// app.get('/profile/:id', (req, res) => {
//     const { id } = req.params;
//     let found = false;
//     database.users.forEach(user => {
//         if(user.id === id) {
//             return res.json(user);
//         }
//     });
//     if (!found) {
//         res.status(404).json('no user found!');
//     }
// });

// app.put('/entries', (req, res) => {
//     const { id } = req.body;
//     let found = false;
//     database.users.forEach(user => {
//         if(user.id === id) {
//             user.entries++;
//             return res.json(user.entries);
//         }
//     });
//     if (!found) {
//         res.status(404).json('no user found!');
//     }
// });

// app.post('/addtodo', (req, res) => {
//     const { id, todo } = req.body;
//     let found = false;
//     database.users.forEach(user => {
//         if(user.id === id) {
//             user.todos.push(todo);
//             return res.json(user.todos);
//         }
//     });
//     if (!found) {
//         res.status(404).json('no user found!');
//     }
// });

// app.post('/addtodo', (req, res) => {
//     const todo = new Todo(req.body);
//     todo.save().then(() => {
//         res.send(todo)
//     }).catch((error) => {
//         res.status(400).send(error)
//     })

// });

app.post('/addtodo', (req, res) => {
    const todo = new todoModel(req.body);
    console.log(todo)
    userModel.findById(req.body.userid).then((user) => {
        user.todos.push(todo)
        user.save()
        res.send(user)
    }).catch((e) => {
        res.send(e)
    })
    // user.todos.push({description: req.body.description}).then(() => {
    //     user.save().then(() => {
    //         res.send(user)
    //     })
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })

});

app.put('/updatetodo', (req, res) => {
    userModel.find({_id: req.body.userid, "todos._id": req.body.todoid}, (err, todo) => {
        if (err) {
            res.send(err)
            console.log(err)
        } else {
            res.send(todo)
            console.log(todo)
        }
    })
 });

 app.put('/deletetodo', (req, res) => {
    userModel.find({todos:{"_id": req.body.todoid}}, (err, todo) => {
        if (err) {
            res.send(err)
            console.log(err)
        } else {
            res.send(todo)
            console.log(todo)
        }
    })
});


//  const todos = user.todos.map((todos) => {
//     // console.log(todos)
//     return todos
//     // todos.
//     // if (req.body.todoid === todo._id) {
//     //     todoid = todo._id
//     // }
// })
// const todoindex = todos.map((todo) => {
//     console.log(todo._id)
//     if(todo._id === req.body.userid){
//         console.log( todos.indexOf(todo))
//     }
// })
// // console.log(todoindex)
// // const todoindex = todos.indexOf()
// // const todoid = user.todos.findById(req.body.todoid)
// // console.log(todos)
// user.todos.map((todo) => {
//     // console.log(todo)
//     if (todoid === todo._id) {
//         todo.description = req.body.description
//     }
// })
//  user.todos.findById(req.body.todoid).then((todo) => {
//     todo.description = req.body.description
//     res.send(user)
// }).catch((e) => {
//     res.send(e)
// })
 
//  user.todos.findByIdAndUpdate(req.body.todoid, { description: req.body.description }, { new: true }).then((todo) => {
//     res.send(todo)
// }).catch((error) => {
//     res.send(error)
// })

// app.put('/updatetodo', (req, res) => {
//    Todo.findOneAndUpdate({description: req.body.description}, {description: req.body.updateddiscription}).then((todo) => {
//        res.send(todo)
//    }).catch((e) => {
//        res.send(e)
//    })
// });

// app.put('/deletetodo', (req, res) => {
//     Todo.findOneAndDelete({description: req.body.description}).then((todo) => {
//         console.log(todo)
//         res.send(todo)
//     }).catch((e) => {
//         res.send(e)
//     })
// });

// app.post('/updatetodo', (req, res) => {
//     const { id, otodo, ntodo } = req.body;
//     let found = false;
//     database.users.forEach(user => {
//         if(user.id === id) {
//             for(var i in user.todos){
//                 if(user.todos[i] === otodo) {
//                     user.todos[i] = ntodo;
//                     return res.json(user.todos);
//                 }
//             }
//         }
//     });
//     if (!found) {
//         res.status(404).json('no user found!');
//     }
// });

// app.put('/removetodo', (req, res) => {
//     const { id, todo } = req.body;
//     let found = false;
//     database.users.forEach(user => {
//         if(user.id === id) {
//             for(var i in user){
//                 if(user.todos[i] === todo) {
//                     user.todos.splice(i, 1);
//                     return res.json(user.todos);
//                 }
//             }
//         }
//     });
//     if (!found) {
//         res.status(404).json('no user found!');
//     }
// });

app.listen(3000, () => {
    console.log("it's running");
});