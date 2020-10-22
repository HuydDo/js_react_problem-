import React from 'react';
import _ from 'lodash';
import FormRow from './FormRow.jsx';
import Animal from './Animal.js';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: ['panda','cat','capybara','iguana','muskrat'].map((name) => {
        return new Animal(name);
      })    
    };
  }

  getValue = ({name,rank}) =>{
      console.log(`Name: ${name} rank: ${rank}`)
  }
  
  handleSubmit = event => {
    event.preventDefault()
    this.props.getValue(this.state)
  }

  render() {

    const rows = this.state.animals.map((animal) => {
      return (
        <FormRow
          animalName={animal.name}
          key={animal.name}
          rank={animal.rank}
          handleChange={this.handleChange}
          getValue={this.getValue}
        />
      );
    });

    const headers = _.range(1, 6).map((i) => <th key={`header-${i}`}>{i}</th>);

    return (
      <div>
        {/* <form onSubmit={this.onSubmit}> */}
        <table>
          <thead>
            <tr>
              <th></th>
              {headers}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <div>{this.state.error}</div>
        <input type="submit" onSubmit={this.handleSubmit} />
        {/* <button type="submit">Submit</button> */}
        {/* </form> */}
      </div>
    );
  }
}

export default MainPage;
