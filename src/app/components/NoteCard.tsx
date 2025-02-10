"use client";

import Markdown from "react-markdown";
import { Note } from "../actions/note-dao";
import remarkGfm from "remark-gfm";
import { formatDistanceToNowStrict } from "date-fns";
import NoteCardDropdown from "./ui/NoteCardDropdown";
import { motion } from "motion/react";

export default function NoteCard({
  note
}: {
  note: Note
}) {
  const humanizedDate = formatDistanceToNowStrict(new Date(note.created), { addSuffix: true })

  return (
    <motion.li
      key={note.id}
      className="relative border border-white/30 rounded-md bg-gradient-to-tr from-white/5 to-white/20 backdrop-blur-lg p-4 my-4 shadow-lg"
      initial={{ scale: 0, opacity: 1 }}
      whileInView={{ scale: 1, opacity: 1}}
      viewport={{ once: true }}
    >
      <NoteCardDropdown note={note} />

      <h1 className="text-3xl text-white">
        FROM: {note.author}
      </h1>

      <Markdown className="text-2xl" remarkPlugins={[remarkGfm]}>{note.content}</Markdown>

      <time className="italic flex justify-end">
        {humanizedDate}
      </time>
    </motion.li>
  );
}