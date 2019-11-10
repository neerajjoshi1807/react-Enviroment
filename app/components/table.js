import React, { Component } from 'react'

const tableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>JOb</th>
            </tr>
        </thead>
    )
}
const tableBody = () => { 
    return(
        <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
    )
}

class Table extends Component {
  render() {
    return (
      <table>
        <tableHeader />
        <tableBody />
        
        </table>
    )
  }
}

export default Table