import App from "../App";
import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import dotenv from 'dotenv';
dotenv.config();

describe("Title Test", () => {
  it("タイトルがHello Jestであること", async () => {
    // testId(title)を指定して取得
    render(<App />);
    const title = await screen.getByTestId("title");
    expect(title).toHaveTextContent("学習管理アプリ");
  });
});