import App from "../App";
import React from "react";
import '@testing-library/jest-dom';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dotenv from 'dotenv';

dotenv.config();

describe("Error Message Test", () => {
  it("入力がない状態で登録ボタンを押すとエラーメッセージが表示される", async () => {
    render(<App />);

    // 登録ボタンをクリック
    const addButton = screen.getByText("登録");
    await userEvent.click(addButton);

    // エラーメッセージが表示されるまで待機して確認
    await waitFor(() => {
      const errorMessage = screen.getByTestId("error-message");
      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent("入力されていない項目があります");
    });
  });
});
