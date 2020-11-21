import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
 
  constructor(){
    super()
    
    this.state = {
      pizzas: [],
      editPizza: {}
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({
      pizzas: pizzas
    }))
  } 
  
  // componentDidUpdate(prevState){
    // debugger
    // if (prevState.pizzas !== this.state.pizzas){
      // debugger
    // }
  // }

  popEditForm = (pizza) => {
    this.setState({editPizza: pizza})
  }

  editPizza = (pizza) => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: 'PATCH',
      headers: {
        Accept: "application/json",
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(pizza)
    })
    .then(resp => resp.json())
    .then(editedPizza => {
      const updatedPizzas = [...this.state.pizzas]
      this.setState({
        pizzas:  updatedPizzas.map(pizza => {
          return pizza.id === editedPizza.id ? {...pizza, ...editedPizza} : pizza
          })
      })
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        pizza={this.state.editPizza} 
        editPizza={this.editPizza}
         />
        <PizzaList 
        pizzas={this.state.pizzas} 
        popEditForm={this.popEditForm}
        />
      </Fragment>
    );
  }
}

export default App;
