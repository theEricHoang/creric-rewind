"use server";

import { pool } from "@/utils/db";
import { revalidatePath } from "next/cache";

export type Note = {
  id: number;
  author: string;
  content: string;
  created: string;
};

export async function createNote(formData: FormData) {
  const author = formData.get("author") as string;
  const content = formData.get("note") as string;

  try {
    const result = await pool.query<Note>("INSERT INTO posts (author, content) VALUES ($1, $2) RETURNING id, author, content, created", [author, content]);
    const newNote = result.rows[0];
    revalidatePath('/notes');
    return newNote;
  } catch (error) {
    console.error(error);
  }
}

export async function getNotesByCreated(): Promise<Note[]> {
  const result = await pool.query<Note>("SELECT * FROM posts ORDER BY created DESC");
  return result.rows;
}

export async function deleteNote(noteId: number) {
  try {
    await pool.query("DELETE FROM posts WHERE id = $1", [noteId]);
    revalidatePath('/notes');
  } catch (error) {
    console.error(error);
  }
}