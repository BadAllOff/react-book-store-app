import React from "react";

import Book from './Book'

const author = {
  'name': 'Mr. Great Author',
  'email': 'greatAuthor@autors.com',
  'avatar': 'https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg',
  'about': 'The greatest author of all times that have become as it by never publishing books'
}

const book = {
  'title': 'Best book title',
  'description': 'short description of book',
  'page_count': 200,
  'language': 'Russian',
  'progress': 20,
  'cover_image': 'https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png',
  'author': author,
  'min_price': '99,99',
  'main_price': '1000000',
  'total_sum': '0.01',
  'expected_sum': '1000000000'
  };
  

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{marginTop: '30px'}}>
        <Book book={book}/>
      </div>
    );
  }
}

export default App;