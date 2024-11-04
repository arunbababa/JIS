import React, { useEffect, useState } from "react";
import { InputRecord } from "./components/InputRecord.jsx";
import { CompleteTodos } from "./components/CompleteTodos.jsx";
import { getAllTodos } from "../utils/supabasefunction.js";



function App() {

  const [todos,setTodos] = useState([]);

  useEffect(() => {
    const getTodos= async() => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    };
    getTodos();
  },[]);

  // フックたち
  const [title, setTitle] = useState(""); //【学習内容】のフォームをフック
  const [time, setTime] = useState(0); //【学習時間】のフォームをフック
  const [records, setRecords] = useState([]); // 【登録した内容】をフック 配列であるべき
  const [error, setError] = useState("");
  const [times, setTimes] = useState([]);

  // インプットの入力するたびに入力値をset~する、これをそれぞれのコンポーネントに渡す
  const onChangeTitle = (e) => setTitle(e.target.value); // 学習内容の入力変更
  const onChangeTime = (e) => setTime(parseInt(e.target.value, 10)); // 学習時間の入力変更

  // 【登録】を押したときの処理
  const onClickAdd = () => {
    if (title === "" || time <= 0) {
      console.log("入力が不足しています");
      setError("入力されていない項目があります");
      console.log(error);
      return;
    }
    const newRecord = { title, time }; // 新しい登録内容を定義
    console.log("新しいレコード:", newRecord);
    setRecords([...records, newRecord]); // 新しい登録内容一覧にする
    setTimes([...times, parseInt(time)]);
    setTitle(""); // 【学習内容】のフォームをリセット
    setTime(0); // 【学習時間】のフォームをリセット
    setError("");
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
      
      {/* エラーメッセージの表示 */}
      {error && <p>{error}</p>} {/* エラーメッセージを表示 */}

    {/* todosはsupabaseの内容、titleと学習時間のこと */}
      <CompleteTodos records={records} times={times} todos={todos }/> 

      {/* Supabaseの学習記録一覧 */}
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title} {todo.time}時間</p>
      ))}

    </>
  );
}

export default App;
