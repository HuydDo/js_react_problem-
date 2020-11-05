import React from 'react';
import _ from 'lodash';

class FormRow extends React.Component {
  render() {
    const cells = _.range(1, 6).map((i) => {
      return (
        <td key={`${this.props.animalName}-${i}`}>
          <input
            type="radio"
            name={this.props.animalName}
            value={i}
          />
        </td>
      );
    });

    return (
      <tr>
        <th>{this.props.animalName}</th>
        {cells}
      </tr>
    )
  }
}

export default FormRow;
