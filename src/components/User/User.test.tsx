import React from "react";
import ReactDOM from "react-dom";
import User from "./User";

import { Provider } from "react-redux";
import store from "../../Store";

describe("User component", () => {
  it("renders component correctly", () => {
    let container: HTMLDivElement;
    container = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <User />
      </Provider>,
      container
    );
  });
});
