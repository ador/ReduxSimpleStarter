import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return (
        <div> No book selected yet.. </div>
      );
    }

    return (
      <div>
        <h3>Book details </h3>
        <div> <b>Title:</b> {this.props.book.title} </div>
        <div> <b>Length:</b> {this.props.book.pages} pages </div>
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
