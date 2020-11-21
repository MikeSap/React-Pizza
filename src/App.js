import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
 
  constructor(){
    super()
    
    this.state = {
      pizzas: [],
      // editPizza: {}
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({
      pizzas: pizzas
    }))
  }

  popEditForm = (pizza) => {
    this.setState({editPizza: pizza})
  }

  editPizza = (pizza) => {
    debugger
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        pizza={this.state.editPizza} 
        editPizza={this.editPizza}
         />
        <PizzaList pizzas={this.state.pizzas} 
        popEditForm={this.popEditForm}
        />
      </Fragment>
    );
  }
}

export default App;
