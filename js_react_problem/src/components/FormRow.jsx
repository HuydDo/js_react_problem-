import React from 'react';
import _ from 'lodash';

class FormRow extends React.Component {

  constructor(){
    super();
    this.state = {
      rowColor : false,
      name: "",
      rank: 0
        // panda: 0,
        // cat:  0,
        // capybara: 0,
        // iguana:  0,
        // muskrat:  0
    }
  }

  handleChange = (e) => {
    if (this.state.rank === e.target.value){
      console.log("can't select same rank.")
    }
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({
      // [e.target.name]: e.target.value,
      name: e.target.name,
      rank: e.target.value,
      rowColor: true
    }, console.log(this.state))
  }
  
  handleChange2 = (e) => {
    let newName = e.target.name
    let newRank = e.target.value
    let cRank = this.state.rank
    let cName = this.state.name
    console.log(this.state)
    console.log(`${newRank} ${newName}`)

    if(cName !== newName) {
      if(cRank !== newRank) {
        this.setState({
         name : newName,
         rank: newRank,
         rowColor: true
        },()=> console.log(this.state))
      }
      else {
        console.log("can't select same rank")
      }
    }

    //  this.setState(previousState => {
       
    //    let cRank = previousState.rank
    //    let cName = previousState.name
    //    console.log(previousState) 

    //    return {
    //       rank: newRank,
    //       name: newName,
    //       rowColor: true
    //      }
    //  },console.log(this.state.rank))
  }

  render() {
    const cells = _.range(1, 6).map((i) => {
      return (
        <td key={`${this.props.animalName}-${i}`} onChange={this.handleChange2}>
          <input 
            type="radio"
            name={this.props.animalName}
            value={i}
          /> 
        </td>
      );
    });

    return (
     
      <tr className = {(this.state.rowColor) ? 'done':null}  >
      {/* <tr> */}
        <th>{this.props.animalName}</th>
        {cells}
      </tr>
    )
  }
}

export default FormRow;
