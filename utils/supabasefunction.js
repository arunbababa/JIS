import { supabase } from "./supabase"

export const  getAllTodos = async () => {
    const todos = await supabase.from("study_record").select("*");
    return todos.data;
}

// 新しいタスクを Supabase に追加する関数
export const addTodo = async (title, time) => {
    console.log("addTodo: データ挿入を試みます");
    const { data, error } = await supabase
        .from("study_record")
        .insert([{ title, time }]);
    if (error) {
        console.error("Supabaseエラー:", error.message);
        return null;
    }
    console.log("Supabaseへの追加成功:", data); // 追加：成功時のデータを確認
    return data;
}

// 特定のタスクを削除する関数
export const deleteTodo = async (id) => {
    console.log("deleteTodo: データ削除を試みます");
    const { data, error } = await supabase
        .from("study_record")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("削除エラー:", error.message);
        return null;
    }

    console.log("Supabaseから削除成功:", data);
    return data;
};