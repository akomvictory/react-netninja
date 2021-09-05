import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinjas';

class App extends Component{
  state = {
    ninjas: [
      {name: 'Ryu', age: 40, belt: 'greeen', id: 1},
      {name: 'Yoshi', age: 32, belt: 'black', id: 2},
      {name: 'Thor', age: 23, belt: 'white', id: 3}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
   }
   deleteNinja = (id) => {
      let ninjas = this.state.ninjas.filter(ninja => {
        return ninja.id !== id
      });
      this.setState({
        ninjas: ninjas
      })
   }
   
  render(){
    return (
      <div className="App">
        <h1> My first React app!</h1>
        <p> Welcome :)</p>
        <p> Good Cars :)</p>
    
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    )
  }
}

export default App;