import { supabase } from "./supabase"

export const  getAllTodos = async () => {
    const todos = await supabase.from("study_record").select("*");
    return todos.data;
}

// 新しいタスクを Supabase に追加する関数
export const addTodo = async (title, time) => {
    const { data, error } = await supabase
        .from("study_record")
        .insert([{ title, time }]);
    if (error) {
        console.error("Error adding todo:", error.message);
        return null;
    }
    console.log("Supabaseへの追加成功:", data); // 追加：成功時のデータを確認
    return data;
}