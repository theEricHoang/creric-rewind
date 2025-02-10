import { createNote } from "@/app/actions/note-dao";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function NewNoteModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await createNote(new FormData(e.currentTarget));
      onClose();
    } catch (error) {
      console.error("error creating note:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="z-20 fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.form
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* exit button */}
        <div className="flex flex-1 items-start justify-end">
          <button
            className="text-pink-700 text-5xl"
            onClick={onClose}
          >
            x
          </button>
        </div>

        <div className="flex flex-col">
          <label
            className="text-2xl font-bold text-black mr-2"
            htmlFor="from"
          >
            from
          </label>
          <input
            className="border-pink-200 border-2 rounded-md px-2 text-black text-xl focus:outline-rose-300"
            type="text"
            id="from"
            name="author"
            maxLength={50}
            placeholder="ur not-so-secret admirer..."
            required
          />

          <label
            className="text-2xl font-bold text-black mr-2"
            htmlFor="note"
          >
            note
          </label>
          <textarea
            className="border-pink-200 border-2 rounded-md px-2 text-black text-xl focus:outline-rose-300"
            id="note"
            name="note"
            rows={4}
            maxLength={1000}
            placeholder="i love u..."
            required
          />
        </div>

        <div className="flex flex-1 items-start justify-end mt-6">
          <motion.button
            className="text-white inline-flex h-12 items-center justify-center rounded-md px-4 text-3xl font-bold shadow-md bg-gradient-to-br from-red-600 to-purple-600 hover:bg-gradient-to-br hover:from-red-400 hover:to-purple-400 active:bg-rose-400"
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? (
              <div className="animate-spin h-5 w-5 border-t-2 border-white rounded-full" />
            ) : (
              "post"
            )}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}