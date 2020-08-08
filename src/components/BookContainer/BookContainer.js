import React from "react";
import BookList from "../BookCard/BookList";
import axios from "axios";

const API_TOKEN = "key9ncgesGi9whRNC";

const httpClient = axios.create({
  baseURL: "https://api.airtable.com/v0/applIXFkfNWeoU7uh",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

class BookContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: null,
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    const { books } = this.state;

    return books ? (
      <div>
        <h4>book container</h4>
        <BookList books={books} />
      </div>
    ) : (
      <div> Books not yet arrived.</div>
    );
  }

  _fetchData() {
    httpClient
      .get("/books", {
        maxRecords: 3,
        view: "Grid view",
      })
      .then((result) => result.data)
      .then(this._mapFromAirtable.bind(this))
      .then((books) => {
        this.setState({
          books: books,
        });
      });
  }

  _mapFromAirtable({ records }) {
    return records.map((record) => ({
      id: record.fields.id,
      title: record.fields.title,
      description: record.fields.description,
      page_count: record.fields.page_count,
      language: record.fields.language,
      progress: record.fields.progress,
      cover_image: record.fields.cover_image[0].url,
      author_list: this._mapAuthorsForEachRecord(record),
      min_price: record.fields.min_price,
      main_price: record.fields.main_price,
      total_sum: record.fields.total_sum,
      expected_sum: record.fields.expected_sum,
      subscribers_count: record.fields.subscribers_count,
    }));
  }

  _mapAuthorsForEachRecord(record) {
    return record.fields.authors
      ? (() => {
          let arr = [];
          if (record.fields.authors.length > 0) {
            for (let i = 0; i < record.fields.authors.length; i++) {
              arr[i] = {
                id: record.fields["id (from authors)"][i],
                name: record.fields["name (from authors)"][i],
                email: record.fields["email (from authors)"][i],
                about: record.fields["about (from authors)"][i],
                avatar: record.fields["avatar (from authors)"][i].url,
              };
            }
          }

          return arr;
        })()
      : [];
  }
}

export default BookContainer;
