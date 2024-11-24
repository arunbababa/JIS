import App from "../App";
import React from "react";
import '@testing-library/jest-dom';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dotenv from 'dotenv';

dotenv.config();

describe("Delete Record Test", () => {
  it("登録された学習記録を削除ボタンを押すと記録が1つ減る", async () => {
    render(<App />);

    // 初期の記録数を取得
    const initialRecords = await screen.findAllByTestId("record-item");
    const initialCount = initialRecords.length;
    console.log("Initial Count:", initialCount);

    // 最初の削除ボタンをクリック
    const deleteButton = screen.getAllByText("削除")[0];
    await userEvent.click(deleteButton);

    // リストが更新されるまで待機して確認
    await waitFor(() => {
      const updatedRecords = screen.getAllByTestId("record-item");
      const updatedCount = updatedRecords.length;
      console.log("Updated Count after deletion:", updatedCount);

      expect(updatedCount).toBe(initialCount - 1);
    });
  });
});
