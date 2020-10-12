import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders battle before data is fetched", () => {
  render(<App />);
  expect(screen.getAllByRole("heading")[0]).toHaveTextContent(
    "Pokemon Showdown"
  );
});
