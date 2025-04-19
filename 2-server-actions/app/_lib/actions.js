"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/todos",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}

export async function addTodoAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const title = formData.get("title");
  const content = formData.get("content");

  if (!/^(?!\s+$).+/g.test(title)) {
    throw new Error("Title must not be empty");
  }

  if (!/^(?!\s+$).+/g.test(content)) {
    throw new Error("Content must not be empty");
  }

  const todo = {
    title,
    content,
    user_id: session.user.userId,
  };

  const { error } = await supabase.from("todos").insert([todo]);

  if (error) {
    throw new Error("Cannot add todo");
  }

  revalidatePath("/todos");
  redirect("/todos");
}

export async function editTodoAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const title = formData.get("title");
  const content = formData.get("content");
  const id = formData.get("id");

  if (!/^(?!\s+$).+/g.test(title)) {
    throw new Error("Title must not be empty");
  }

  if (!/^(?!\s+$).+/g.test(content)) {
    throw new Error("Content must not be empty");
  }

  const todo = {
    title,
    content,
    user_id: session.user.userId,
  };

  const { error } = await supabase.from("todos").update([todo]).eq("id", id);

  if (error) {
    throw new Error("Cannot edit todo");
  }

  revalidatePath("/todos");
  revalidatePath(`/todos/edit/${id}`);
  redirect("/todos");
}

export async function deleteTodoAction(id) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    throw new Error("Cannot delete todo");
  }

  revalidatePath("/todos");
}
