import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { Provider } from "react-redux";
import store from "./Store";

import { MemoryRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  const title = screen.getByText(/We-Blog/i);
  expect(title).toBeInTheDocument();
});
