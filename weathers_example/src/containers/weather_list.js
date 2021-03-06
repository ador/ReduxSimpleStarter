import React, { Component } from 'react';
import { connect } from 'react-redux';


class WeatherList extends Component {

  renderWeatherForCity(cityData) {
    const cityName = cityData.city.name;
    return (
      <tr key={cityName}>
        <td> {cityName} </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover" >
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature </th>
            <th> Pressure </th>
            <th> Humidity </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeatherForCity)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);