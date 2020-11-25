import React, { useState, useEffect } from "react"

const PizzaForm = (props) => {

  const [pizza, setPizza] = useState({...props.pizza})
  let { size, topping, vegetarian} = pizza  

  const handleChange = (e) => {
      if ( e.target.name === "vegetarian" ){
        setPizza({
          ...pizza,
          [e.target.name]:e.target.checked
        })
      } else {
      setPizza({
        ...pizza,
        [e.target.name]:e.target.value
      })
    } 
  }

  useEffect(() => {
    if (props.pizza) {
      setPizza(props.pizza)
    }
    }, [props])
    

  return(
      <div>
        <form onSubmit={() => {props.editPizza(pizza)}}>
        <div className="form-group">          
            <input onChange={handleChange} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={topping}/>
        </div>
        <div className="form-group">
          <select onChange={handleChange} name="size" value={size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div>
          <div className="form-row">
            <input onChange={handleChange} name="vegetarian" className="form-check" type="checkbox" defaultChecked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
        </div>
        <div className="form-row">
          <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </div> 
        </form>       
      </div>
      

  )
}

export default PizzaForm
