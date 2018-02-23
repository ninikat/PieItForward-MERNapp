import React, { Component } from 'react';
import '../App.css';

class Home extends Component {

  render() {
    return (
      <div className="App">
      <div className="welcome_text">
        <p className="home_about">GIFT A PIZZA SLICE</p>
         <p className="home_about">#PIZZAKARMA</p>
      </div>
      <div className="instructions">
        <p className="home_instructions">HOW IT WORKS: PAY FOR A SLICE OF PIZZA THAT A RANDOM HUNGRY STRANGER CAN REDEEM LATER</p>
      </div>

      </div>
    );
  }
}

export default Home;
