//Container is the component that has the access to the state created by Redux
import React, { Component } from 'react';
import { connect } from 'react-redux'; //Connect react and redux
import { selectBook } from '../actions/index';
import{ bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  };
}

//Take application state and send it to props of the container.
//App state has two props: books and activeBook
//Whenever the app state is changed, the component is automatically rerendered.
function mapStateToProps(state) {
  //Whatever is returned will show up as props inside of BookList;
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  //Whenver selectBook is called, the result should be passed to all of our recucers.
  //dispatch receives action creators and sends them to reducers.
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

//Export the container
//connect take a function and a component to create a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
