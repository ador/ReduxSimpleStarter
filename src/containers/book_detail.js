import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    return (
      <div>
        <h3>Book detail </h3>
        <div> {this.props.book.title} </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  // what object we return from here will be the "props" of the BookList
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
