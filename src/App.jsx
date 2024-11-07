import React, { useEffect, useState } from "react";
import { InputRecord } from "./components/InputRecord.jsx";
import { CompleteTodos } from "./components/CompleteTodos.jsx";
import { addTodo, deleteTodo, getAllTodos } from "../utils/supabasefunction.js";

function App() {

  // フックたち
  const [title, setTitle] = useState(""); //【学習内容】のフォームをフック
  const [time, setTime] = useState(0); //【学習時間】のフォームをフック
  const [records, setRecords] = useState([]); // 【登録した内容】をフック 配列であるべき
  const [error, setError] = useState("");
  const [times, setTimes] = useState([]);

  const [todos,setTodos] = useState([]);

  useEffect(() => {
    const getTodos= async() => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    };
    getTodos();
  },[]);

  // インプットの入力するたびに入力値をset~する、これをそれぞれのコンポーネントに渡す
  const onChangeTitle = (e) => setTitle(e.target.value); // 学習内容の入力変更
  const onChangeTime = (e) => setTime(parseInt(e.target.value, 10)); // 学習時間の入力変更

  // 【登録】を押したときの処理
  const onClickAdd = async() => 
  {
    if (title === "" || time <= 0) 
    {
    setError("入力されていない項目があります");
    return;
    }

    // Supabase にタスクを追加
    const newTodo = await addTodo(title, time);
    console.log("newTodoの内容:", newTodo);  // newTodoの内容を確認
    
    // Supabaseから最新データを再取得してtodosを更新
    const updatedTodos = await getAllTodos();
    setTodos(updatedTodos);  // 最新のデータで画面を更新

    // フォームのリセット
    setTitle("");
    setTime(0);
    setError("");
      
  };

  const onClickDelete = async (id) => 
    {
      await deleteTodo(id);
      const updatedTodos = await getAllTodos();
      setTodos(updatedTodos);  // 最新のデータで画面を更新
    };

  return (
    <>
      <InputRecord
        title={title}
        time={time}
        onChangeTitle={onChangeTitle}
        onChangeTime={onChangeTime}
        onClick={onClickAdd}
      />
      
    {/* todosはsupabaseの内容、titleと学習時間のこと */}
      <CompleteTodos 
        todos={todos} //めも：左がプロップス名、右が渡す値（ブラックボックス）、そして渡すコンポーネント先でプロップス名を使い値を使える
        onDelete={onClickDelete}
      /> 

    </>
  );
}

export default App;
