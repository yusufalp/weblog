import React from "react";
import ReactDOM from "react-dom";
import UserList from "./UserList";

import { render, fireEvent } from "@testing-library/react";

import { Provider } from "react-redux";
import store from "../../Store";

describe("User List component", () => {
  it("renders component correctly", () => {
    let container: HTMLDivElement;
    container = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <UserList />
      </Provider>,
      container
    );
  });

  it("renders search input text correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
    getByText("Search Name:");
  });

  it("allows users to search by name", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <UserList />
      </Provider>
    );
    const input = getByLabelText("Search Name:");
    fireEvent.change(input, { target: { value: "Leanne" } });
  });
});
