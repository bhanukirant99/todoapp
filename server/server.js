const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const app = new express();

app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '101',
            name: 'Raj',
            email: 'raj@gmail.com',
            password: 'raj',
            entries: 0,
            joined: new Date(),
            todos: [],
        },
        {
            id: '102',
            name: 'Ram',
            email: 'ram@gmail.com',
            password: 'ram',
            entries: 0,
            joined: new Date(),
            todos: [],
        },
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
});

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password){
            res.json('success');
            console.log('success')
    } else {
            res.status(400).json('error while signing in!, please register');
            console.log('error')
    }
    res.json('signing');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash);
    });
    database.users.push({
            id: '103',
            name: name,
            email: email,
            entries: 0,
            joined: new Date(),
    })
    res.json(database.users[database.users.length-1]);
});

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id) {
            return res.json(user);
        }
    });
    if (!found) {
        res.status(404).json('no user found!');
    }
});

app.put('/entries', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id) {
            user.entries++;
            return res.json(user.entries);
        }
    });
    if (!found) {
        res.status(404).json('no user found!');
    }
});

app.post('/addtodo', (req, res) => {
    const { id, todo } = req.body;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id) {
            user.todos.push(todo);
            return res.json(user.todos);
        }
    });
    if (!found) {
        res.status(404).json('no user found!');
    }
});

app.post('/updatetodo', (req, res) => {
    const { id, otodo, ntodo } = req.body;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id) {
            for(var i in user.todos){
                if(user.todos[i] === otodo) {
                    user.todos[i] = ntodo;
                    return res.json(user.todos);
                }
            }
        }
    });
    if (!found) {
        res.status(404).json('no user found!');
    }
});

app.put('/removetodo', (req, res) => {
    const { id, todo } = req.body;
    let found = false;
    database.users.forEach(user => {
        if(user.id === id) {
            for(var i in user){
                if(user.todos[i] === todo) {
                    user.todos.splice(i, 1);
                    return res.json(user.todos);
                }
            }
        }
    });
    if (!found) {
        res.status(404).json('no user found!');
    }
});

app.listen(3000, () => {
    console.log("it's running");
});