import React from "react";
import Book from "./Book";


export default class BookList extends React.Component {


    render() {

const booklist = this.props.books.map(item => <Book title={item.volumeInfo.title} 
        key={item.id}
        authors={item.volumeInfo.authors}
        price={item.saleInfo.saleability}
        description={item.volumeInfo.description}
        thumbnail={item.volumeInfo.imageLinks.smallThumbnail} />)

        return <div className="booklist">
            {booklist}
        </div>
    }
}

BookList.defaultProps = {
    books: []
};