export const InputRecord = (props) => {
    const { title, time, onChangeTitle, onChangeTime, onClick } = props;
    return (
      <div>
        <h1>学習記録一覧</h1>
        {/* 学習内容の入力フィールド */}
        <input
          type="text"
          value={title}
          onChange={onChangeTitle}
          placeholder="学習内容を入力"
        />
        <br />
  
        {/* 学習時間の入力フィールド */}
        <input
          type="number"
          value={time}
          onChange={onChangeTime}
          placeholder="学習時間を入力"
        />
        <br />
        <p>学習内容：{title}</p>
        <p>学習時間：{time}時間</p>
  
        <button onClick={onClick}>登録</button>
      </div>
    );
  };
  