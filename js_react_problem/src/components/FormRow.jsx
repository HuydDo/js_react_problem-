import React from 'react';
import _ from 'lodash';

class FormRow extends React.Component {

  constructor(){
    super();
    this.state = {
      rowColor : false,
      error: '',
      selectedAnimal:[],
      errSelectedRanks: []
    }
  }

  handleChange = (e) => {
    
    console.log(e.target.name)
    const newName = e.target.name
    const newRank = e.target.value
    console.log("before: " + this.state)
    
    this.setState({
      // selectedAnimal: [...this.state.selectedAnimal, newName],
      errSelectedRanks: [...this.state.errSelectedRanks, newRank],
      rowColor: true
    }, console.log("after: " + this.state))

    // this.setState(prevState => ({
    //   selectedAnimal: [...prevState.selectedAnimal, newName],
    //   errSelectedRanks: [...prevState.errSelectedRanks, newRank],
    //   rowColor: true
    // }), console.log("after: " + this.state))
  }

  handleAnimalSelect = (e) => {
    let a = [1,2,4]
    console.log(a.includes(1))
    const err = true
    // const err = this.state.selectedAnimals.includes(e.target.name);
    if (err === true){
        this.setState({error: e.target.name});
    }
 }

  render() {
    const cells = _.range(1, 6).map((i) => {
      return (
        <td key={`${this.props.animalName}-${i}`} >
          <input 
            onChange={this.handleChange}
            type="radio"
            name={this.props.animalName}
            value={i}
            onClick={this.handleAnimalSelect}
          /> 
           {/* { this.state.error !== undefined ?  <div >{`Animal ${this.state.error} was chosen twice`}</div> : ""} */}
        </td>
      );
    });

    return (
     
      <tr className = {(this.state.rowColor) ? ((this.state.error === undefined) ? 'error' : 'done'): null}  >
      {/* <tr> */}
        <th>{this.props.animalName}</th>
        {cells}
      </tr>
    )
  }
}

export default FormRow;
