import React from "react";
import axios from "axios";
import { zip, zipObject } from "lodash";

const API_TOKEN = "key9ncgesGi9whRNC";

const httpClient = axios.create({
  baseURL: "https://api.airtable.com/v0/applIXFkfNWeoU7uh",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

const withBooks = (EnhancedComponent) =>
  class WithBooks extends React.Component {
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

      return <EnhancedComponent isLoading={!books} books={books} />;
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
            books,
          });
        });
    }

    _mapFromAirtable({ records }) {
      return records.map((record) => ({
        id: record.fields.id,
        title: record.fields.title,
        description: record.fields.description,
        pageCount: record.fields.page_count,
        language: record.fields.language,
        progress: record.fields.progress,
        coverImage: record.fields.cover_image[0].url,
        authorList: this._mapAuthorsForEachRecord(record),
        minPrice: record.fields.min_price,
        mainPrice: record.fields.main_price,
        totalSum: record.fields.total_sum,
        expectedSum: record.fields.expected_sum,
        subscribersCount: record.fields.subscribers_count,
      }));
    }

    _mapAuthorsForEachRecord(record) {
      return record.fields.authors
        ? (() => {
            let arr = [];

            if (record.fields.authors.length > 0) {
              for (let i = 0; i < record.fields.authors.length; i++) {
                arr = zip(
                  record.fields["id (from authors)"],
                  record.fields["name (from authors)"],
                  record.fields["email (from authors)"],
                  record.fields["about (from authors)"],
                  record.fields["avatar (from authors)"].map((item) => item.url)
                ).map((record) =>
                  zipObject(["id", "name", "email", "about", "avatar"], record)
                );
              }
            }

            return arr;
          })()
        : [];
    }
  };

export default withBooks;
