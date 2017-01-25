import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map(
      (book) => { return(
          <li key={book.title}
              onClick={()=> this.props.selectBook(book)}
              className="list-group-item">
            {book.title}
          </li>
        )}
    )
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // what object we return from here will be the "props" of the BookList
  return {
    books: state.books
  };
}


// anything returned from here (which is the first arg given to "bindActionCreators")
//  will be available within props of the BookList container 
// (because of the "connect")
function mapDispatchToProps(dispatch) {
  // we imported selectBook, a function, from actions/index.js
  // and this "mapDispatchToProps" will do this (if bound by "connect" to the comp):
  // whenever SelectBook is called, the result should be passed to all our reducers 
  return bindActionCreators({ selectBook: selectBook }, dispatch)
  // dispatch is a smart function that knows all reducers and will notify them

}



export default connect(mapStateToProps, mapDispatchToProps)(BookList);
