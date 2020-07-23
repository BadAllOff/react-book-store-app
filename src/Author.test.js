import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Author from "./Author";

const author = {
  name: "Mr. Great Author",
  email: "greatAuthor@autors.com",
  avatar:
    "https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg",
  about:
    "The greatest author of all times that have become as it by never publishing books",
};

test("should render author on page", () => {
  const { getByText } = render(<Author author={author} />);
  expect(getByText("Mr. Great Author")).toBeInTheDocument();
  expect(getByText("greatAuthor@autors.com")).toBeInTheDocument();
  expect(getByText("The greatest author of all times that have become as it by never publishing books")).toBeInTheDocument();
});