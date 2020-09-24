import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
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
