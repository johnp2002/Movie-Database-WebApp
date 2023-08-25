import React from 'react';
import './App.css';
import Movie from './Movie';
const Films = require('./Films.json')

class App  extends React.Component{
  
  constructor(){
    super();
    this.state={
      name:"none",
      mov:Films
    }
    console.log(this.state.mov)
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: `)
    console.log("SUBMITTED")
    console.log(event.target.value)
    console.log(this.state.mov)
    if(this.state.name !== 'none'){
      this.setState({
        mov :  Films.filter(person => Math.floor(person.imdbRating) >= this.state.name)
      })
    }
    
  }
  
  render(){
    return (
      <div >
          <nav>
            <h2>J FliX</h2>
          <form onSubmit={this.handleSubmit}>
            <label>By rating : 
              <select 
                value={this.state.name}
                onChange={(e) => this.setState({name:e.target.value})}
              >
                <option value={'none'}>none</option>
                <option value={'8'}>8</option>
                <option value={'7'}>7</option>
                <option value={'6'}>6</option>
                <option value={'5'}>5</option>
                <option value={'4'}>4</option>
                <option value={'3'}>3</option>
              </select>
            </label>
            <input id='btn' type="submit" required />
          </form>
          </nav>
          <div className="App">
            {/* {console.log(Films)} */
            // if()
              this.state.mov.map((mov)=>{
                return (
                  <Movie mov={mov} />
                  )
                })
              }
          </div>
      </div>
    );
    
  }
}


export default App;
