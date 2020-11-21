import React, { useState, useEffect } from "react"

const PizzaForm = (props) => {

  const [pizza, setPizza] = useState({})

  let { id, size, topping, vegetarian} = pizza  

  const handleChange = (e) => {
    e.persist()
    if (e.target.value === "Not Vegetarian"){
      setPizza({
        ...pizza,
        vegetarian:false
      })
    }else if (e.target.value === "Vegetarian"){
      setPizza({
        ...pizza,
        vegetarian:true
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
      setPizza(props.pizza);
    }
    }, [props]);    

  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={handleChange} name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={topping}/>
        </div>
        <div className="col">
          <select onChange={handleChange} name="size" value={size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={handleChange} name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleChange} name="vegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={!vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.editPizza(pizza)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
