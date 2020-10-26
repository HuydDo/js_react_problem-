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
      }),
      error: ''
    };
  }


  isDisabled = () =>{
   // The submit button is disabled by default. Enable it when all rows have a
   // rank selected and all selected ranks are unique.
    return true
  }

  render() {

    const rows = this.state.animals.map((animal) => {
      return (
        <FormRow
          animalName={animal.name}
          key={animal.name}
          rank={animal.rank}
         
          getValue={this.getValue}
          handleAnimalSelect={this.handleAnimalSelect}
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
        <input type="submit" value="Submit" disabled={this.isDisabled()} />        
        {/* <button type="submit">Submit</button> */}
        {/* </form> */}
      </div>
    );
  }
}

export default MainPage;
