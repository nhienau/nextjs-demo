import { supabase } from "./supabase";

export async function getUser(email) {
  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();
  return data;
}

export async function createUser(user) {
  const { data, error } = await supabase.from("users").insert([user]);

  if (error) {
    console.error(error);
    throw new Error("Failed to create user");
  }

  return data;
}

export async function getTodos(userId) {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .order("id", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Failed to get to-dos");
  }

  return data;
}

export async function getTodo(id) {
  const { data } = await supabase
    .from("todos")
    .select("*")
    .eq("id", id)
    .single();

  return data;
}
