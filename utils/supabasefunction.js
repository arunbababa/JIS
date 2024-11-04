import { supabase } from "./supabase"

export const  getAllTodos = async () => {
    const todos = await supabase.from("study_record").select("*");
    return todos.data;
}