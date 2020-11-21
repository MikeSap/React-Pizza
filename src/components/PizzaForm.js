import React, { useState, useEffect } from "react"

const PizzaForm = (props) => {

  const [pizza, setPizza] = useState({...props.pizza})
  // HOW DO I CLEAR FORM AFTER SUBMIT?
  let { size, topping, vegetarian} = pizza  

  const handleChange = (e) => {
    e.persist()
    // if (e.target.value === "Not Vegetarian"){
    //   setPizza({
    //     ...pizza,
    //     vegetarian:false
    //   })
    // }else if (e.target.value === "Vegetarian"){
    //   setPizza({
    //     ...pizza,
    //     vegetarian:true
    //   })
    // } else {
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
    // HOW DO I CLEAR THE FORM AFTER SUBMIT?!?!?
    // const clearForm = () => {
    //   debugger
    //   setPizza({setPizza({id:"", topping:"", size:"", vegetarian:""})
    // }

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
            <input onChange={handleChange} name="vegetarian" className="form-check-input" type="checkbox" defaultChecked={vegetarian}/>
            {/* hidden value for unchecked checkbox for false value?? did'nt work */}
            {/* <input onChange={handleChange} name="vegetarian" className="form-check-input" type="hidden" value="false"/> */}
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
        {/* <div className="col">
          <div className="form-check">
            <input onChange={handleChange} name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div> */}
          {/* <div className="form-check">
            <input onChange={handleChange} name="vegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={!vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div> */}

        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => {
            props.editPizza(pizza)
            // HOW DO I CLEAR THIS FORM???
            // clearForm()
            }
            }>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
