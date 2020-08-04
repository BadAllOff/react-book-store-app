import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignUpToBook from "../components/BookCard/SignUpToBook";

const book = {
  title: "Best book title",
};


test("should render sign up form on page", () => {
  const { getByText } = render(<SignUpToBook book={book} />);
  expect(getByText(`Sign up and get latest information about "Best book title"`)).toBeInTheDocument();
  expect(getByText("Sign up")).toBeInTheDocument();
});