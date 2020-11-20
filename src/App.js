import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
 
  constructor(){
    super()
    
    this.state = {
      pizzas: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({
      pizzas: pizzas
    }))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm/>
        <PizzaList pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
