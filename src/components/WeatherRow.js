  import React, { Component } from 'react';
  import '../App.css';

class WeatherRow extends Component {

    render() {  
        return (
          <tr>
            <td>{this.props.location}</td>
            <td>{this.props.weather}</td>
            <td>{this.props.temp}</td>
        </tr>
        );
    }
}

export default WeatherRow;