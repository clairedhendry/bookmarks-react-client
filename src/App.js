// import React, { Component } from 'react';
// import './App.css';
// import Header from "./Header";
// import BookList from "./BookList/BookList";
// import SearchBar from "./SearchBar";


// class App extends Component {

// state = {
//   books: [], 
//   error: null,
//   searchTerm: "",
//   printType: "",
//   bookType: "",
// }

// setSearchTerms = (searchTerm, printType, bookType) => {
//   this.setState({
//     searchTerm: searchTerm,
//     printType: printType,
//     bookType: bookType,
//   })
// }

// componentDidMount() {


//   const searchTerm = this.state.searchTerm;
//   const PrintType = this.state.printType;
//   const BookType = this.state.bookType;

//   const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${PrintType}&filter=${BookType}&key=AIzaSyBZ7DAT_b2HPqo6EOibshDYCWLoONF8PKc`;
   
//   if(!this.state.searchTerm === "") {   
//       fetch(searchURL)
//       .then (response => {
//         if(response.ok) {
//           return response.json();
//         } else {
//           throw new Error(alert("something went wrong"));
//         }
//       })
//       .then((data) => this.setState({
//         books: data.items,
//         error: null,
//         searchTerm: "",
//         printType: "",
//         bookType: ""
//       })
//       )
      
//       .catch(err => {
//         this.setState({
//           error: err.message
//         })
//       })
//     }

// }


// render() {

// const search = (this.state.books && <SearchBar setSearchTerms={(searchTerm, printType, bookType) => this.setSearchTerms(searchTerm, printType, bookType)}/>)
 

//   return ( <div className="main">
//     <Header />
//     {search}
//     <BookList books={this.state}/>
//     </div>
//   )
// }

// }

// export default App;


import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import BookList from "./BookList/BookList";
import SearchBar from "./SearchBar";


class App extends Component {

state = {
  books: [], 
  error: null,
}

setBookData = (data) => {
  this.setState({
    books: data
  })
}



render() {

  return ( <div className="main">
    <Header />
    <SearchBar fetchBooks={(data) => this.setBookData(data)}/>
    <BookList books={this.state.books}/>
    </div>
  )
}

}

export default App;
