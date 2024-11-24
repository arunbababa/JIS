import App from "../App";
import React from "react";
import '@testing-library/jest-dom';
import { render, screen,waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dotenv from 'dotenv';

dotenv.config();

describe("Add Record Test", () => {
  it("学習内容と時間を入力して登録ボタンを押すと記録が追加される", async () => {
    render(<App />);

    // 初期の記録数を取得
    const initialRecords = await screen.findAllByTestId("record-item");
    const initialCount = initialRecords.length;
    console.log("Initial Count:", initialCount);

    // 学習内容と時間を入力
    const studyContent = screen.getByPlaceholderText("学習内容を入力");
    const studyTime = screen.getByPlaceholderText("学習時間を入力");
    await userEvent.type(studyContent, "jest_test");
    await userEvent.type(studyTime,"5");

    // 登録ボタンをクリック
    const addButton = screen.getByText("登録");
    userEvent.click(addButton);

    // リストが更新されるまで待機して確認
    await waitFor(async () => {
      const updatedRecords = await screen.findAllByTestId("record-item");
      const updatedCount = updatedRecords.length;
      console.log("Updated Count:", updatedCount);

      expect(updatedCount).toBe(initialCount + 1);
    });
  });
});