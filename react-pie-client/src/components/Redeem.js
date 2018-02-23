import React, { Component } from 'react';
import '../App.css';

class Redeem extends Component {
  constructor(props){
    super(props)
    this.state = {
      pizza: []
    }
  }

  getSlices(){
    fetch("http://localhost:3001/pizzaslices").then((response) =>{
      return response.json();
     }).then((slices)=>{
       console.log(slices);
       this.setState({pizza:slices})
     })
   }

   deletePizzaSlice(index){
     //let newState = this.state.pizza
     console.log("hello")
   }
   componentWillMount(){
     this.getSlices();
   }

  render() {
    let stateLocal = this.state.pizza
    console.log(stateLocal)
    let slices = stateLocal.map((slice,index)=><div className="slice_border"><li className="pizza_list"><p className="pizza_description">Slice of: {slice.name}</p><p className="pizza_description">From: {slice.restaurant}</p><button className="button_style" onClick= {this.deletePizzaSlice}>Redeem</button></li></div>)

    return (
      <div className="App">
      <h1>Redeem a slice</h1>
      <ul>
      {slices}
      </ul>
      </div>
    );
  }
}

export default Redeem;
