import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

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
