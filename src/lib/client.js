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

export function createBook(params) {
  return httpClient
    .post("/books", {
      records: [params],
    })
    .then((result) => result.data);
}
