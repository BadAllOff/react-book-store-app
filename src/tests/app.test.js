import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

test("landing on a bad page shows 404 page", () => {
  const history = createMemoryHistory();
  history.push("/some/bad/route");
  const { findByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(
    findByText(`Sorry, we didn't find anything by this address`)
  ).toBeTruthy();
});

test("landing on a main page", () => {
  const history = createMemoryHistory();
  history.push("/");
  const { findByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(findByText(`Keep reading...`)).toBeTruthy();
});

test("landing on a wish list page", () => {
  const history = createMemoryHistory();
  history.push("/");
  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/Wish List/i), leftClick);
  const { findByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(findByText(`My wish list`)).toBeTruthy();
});
