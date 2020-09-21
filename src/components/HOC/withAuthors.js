import React from "react";
import axios from "axios";

const API_TOKEN = "key9ncgesGi9whRNC";

const httpClient = axios.create({
  baseURL: "https://api.airtable.com/v0/applIXFkfNWeoU7uh",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

const withAuthors = (EnhancedComponent) =>
  class withAuthors extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authors: null,
      };
    }

    componentDidMount() {
      this._fetchData();
    }

    render() {
      const { authors } = this.state;

      return <EnhancedComponent isLoading={!authors} authors={authors} />;
    }

    _fetchData() {
      httpClient
        .get("/authors", {
          fields: "name",
          fields: "id",
        })
        .then((result) => result.data)
        .then(this._mapFromAirtable.bind(this))
        .then((authors) => {
          this.setState({
            authors,
          });
        });
    }

    _mapFromAirtable({ records }) {
      return records.map((record) => ({
        id: record.id,
        name: record.fields.name,
      }));
    }
  };

export default withAuthors;
