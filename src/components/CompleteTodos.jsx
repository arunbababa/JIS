export const CompleteTodos = (props) => {
    const { records, times, todos } = props;
  
    //reduceを使って合計勉強時間を計算
    const totalTimeFromTimes = times.reduce((acc, curr) => acc + curr, 0);

    const totalTimeFromTodos = todos.reduce((acc,todo) => acc + (todo.time || 0),0);

    const totalTime = totalTimeFromTimes + totalTimeFromTodos;
  
    return (
      <div>
        <h2>合計勉強時間: {totalTime} 時間</h2>
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              <p>
                <div className="list-row">
                  {record.title} {record.time}
                </div>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  