import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SIgnUpToBook from "./SIgnUpToBook";

const book = {
  title: "Best book title",
};


test("should render sign up form on page", () => {
  const { getByText } = render(<SIgnUpToBook book={book} />);
  expect(getByText(`Sign up and get latest information about "Best book title"`)).toBeInTheDocument();
  expect(getByText("Sign up")).toBeInTheDocument();
});