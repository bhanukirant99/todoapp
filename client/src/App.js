// import User from '../../server/src/models/user';
// import Todo from '../../server/src/models/todo';
// import User from './src/models/user';
// import Todo from './src/models/todo';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import TodoApp from './components/Todo/TodoApp';
import Todo from './components/Todo/Todo';
// import axios from 'axios';
import './App.css';
// import mongoose from '../../server/src/db/mongodb';
// import mongoose from './src/db/mongodb';


const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      todos: [],
      input: '',
      route: 'home',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        todos: [],
      }
    }
  }

  loadUser = (user) => {
    this.setState({user: {
      id: user._id,
      name: user.name,
      email: user.email,
      todos: user.todos,
    }})
    // this.loadUser()
  }

  // loadUser = () => {
  //  axios.get('/users').then((response) => {
  //    console.log(response.users)
  //  }).catch((e) => {
  //    console.log(e)
  //  })
  // }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div className="container">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <h1 className="text-center f1 fw6 ph0 mh0">TODO LIST</h1>
                    <TodoApp sendUser={this.state.user}/>
                </div>
              </div>
            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
