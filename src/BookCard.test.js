import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import BookCard from "./BookCard";

const author = {
  name: "Mr. Great Author",
  email: "greatAuthor@autors.com",
  avatar:
    "https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg",
  about:
    "The greatest author of all times that have become as it by never publishing books",
};

const book = {
  title: "Best book title",
  description: "short description of book",
  page_count: 200,
  language: "Russian",
  progress: 20,
  cover_image:
    "https://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png",
  author: author,
  min_price: "99,99",
  main_price: "1000000",
  total_sum: "0.01",
  expected_sum: "1000000000",
};

test("should render book on page", () => {
  const { getByText } = render(<BookCard book={book} />);
  expect(getByText("Best book title")).toBeInTheDocument();
  expect(getByText("$1000000")).toBeInTheDocument();
  expect(getByText("$99,99")).toBeInTheDocument();
  expect(getByText("$0.01")).toBeInTheDocument();
});