import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault(); // dont reload the whole page! (SPA)
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}
        className="input-group" >
        <input 
          placeholder="Add forecasts for a city (type city name)"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}


// so that 'fetchWeather' is available in 'this.props'
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// so that 'fetchWeather' is available in 'this.props'
// null: because state from redux is not needed here
export default connect(null, mapDispatchToProps)(SearchBar);
