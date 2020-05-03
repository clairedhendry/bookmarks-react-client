// import React from "react";
// import "./SearchForm.css";


// export default class SearchBar extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             searchTerm: "",
//             printType: "all",
//             bookType: "full",
//     }
//     }

//     searchTermChange(value) {
//         this.setState({
//             searchTerm: value,
//         })
//     }

//     printTypeChange(value) {
//         this.setState({
//             printType: value
//         })
//     }

//     bookTypeChange(value) {
//         this.setState({
//             bookType: value
//         })
//     }
    
// componentDidMount() {

// }
//     render() {

//         const searchTerm = this.state.searchTerm;
//         const printType = this.state.printType;
//         const bookType = this.state.bookType;
       
          
 
//         return(
            
//             <form className="search_form" onSubmit={e => {
//                 e.preventDefault();
//                 if (searchTerm === "") {
//                     this.props.setSearchTerms(null, null, null)
//                 } else {
//                 this.props.setSearchTerms(searchTerm, printType, bookType)
//                 } }}>
//                 <div className="search_bar">
//                     <label htmlFor="Search">Search:</label>
//                     <input
//                         type="text"
//                         name="search"
//                         placeholder="Keyword"
//                         value={this.state.searchTerm}
//                         onChange={e => this.searchTermChange(e.target.value)}/>
//                     <button type="submit">Search</button>
//                 </div>
            
//              <div className="filter_bar">
//                 <label htmlFor="Print Type">Print Type</label>
//                 <select id="print_type" name="print_type" onChange={e => this.printTypeChange(e.target.value)}>
//                     <option value="all">All</option>
//                     <option value="books">Books</option>
//                     <option value="magazines">Magazines</option>
//                 </select>
//                 <label htmlFor="Book Type">Book Type</label>
//                 <select id="book_type" name="book_type" onChange={e => this.bookTypeChange(e.target.value)}>
//                     <option value="full">Full</option>
//                     <option value="partial">Partial</option>
//                     <option value="free-ebooks">Free e-books</option>
//                     <option value="paid-ebooks">Paid e-books</option>
//                     <option value="ebooks">Ebooks</option>
//                 </select>
//              </div>
//             </form>
        
//         )
//     }
// }

import React from "react";
import "./SearchForm.css";


export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            printType: "all",
            bookType: "full",
    }
    }

    searchTermChange(value) {
        this.setState({
            searchTerm: value,
        })
    }

    printTypeChange(value) {
        this.setState({
            printType: value
        })
    }

    bookTypeChange(value) {
        this.setState({
            bookType: value
        })
    }
    
handleSubmit(e) {
    e.preventDefault();
        const searchTerm = this.state.searchTerm;
        const PrintType = this.state.printType;
        const BookType = this.state.bookType;
      
        const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=${PrintType}&filter=${BookType}&key=AIzaSyBZ7DAT_b2HPqo6EOibshDYCWLoONF8PKc`;
         
     
            fetch(searchURL)
            .then (response => {
              if(response.ok) {
                return response.json();
              } else {
                throw new Error(alert("something went wrong"));
              }
            })
            .then((data) => this.props.fetchBooks(data.items)
            )  
            .then(this.setState({
                searchTerm: ""
            }))  
            .catch(err => {
              this.setState({
                error: err.message
              })
            })
}
      
      
    render() {

        return(
            
            <form className="search_form" onSubmit={e => this.handleSubmit(e)}>
                <div className="search_bar">
                    <label htmlFor="Search">Search:</label>
                    <input
                        type="text"
                        name="search"
                        placeholder="Keyword"
                        value={this.state.searchTerm}
                        onChange={e => this.searchTermChange(e.target.value)}/>
                    <button type="submit">Search</button>
                </div>
            
             <div className="filter_bar">
                <label htmlFor="Print Type">Print Type</label>
                <select id="print_type" name="print_type" onChange={e => this.printTypeChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="Book Type">Book Type</label>
                <select id="book_type" name="book_type" onChange={e => this.bookTypeChange(e.target.value)}>
                    <option value="full">Full</option>
                    <option value="partial">Partial</option>
                    <option value="free-ebooks">Free e-books</option>
                    <option value="paid-ebooks">Paid e-books</option>
                    <option value="ebooks">Ebooks</option>
                </select>
             </div>
            </form>
        
        )
    }
}


  