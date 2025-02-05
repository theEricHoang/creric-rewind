
export default function NewNoteModal({
  onClose
}: {
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
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
            htmlFor="title"
          >
            title
          </label>
          <input
            className="border-rose-300 border-2 rounded-md px-2 text-black text-xl focus:outline-pink-700"
            type="text"
            id="title"
          />

          <label
            className="text-2xl font-bold text-black mr-2"
            htmlFor="note"
          >
            note
          </label>
          <textarea
            className="border-rose-300 border-2 rounded-md px-2 text-black text-xl focus:outline-pink-700"
            id="note"
            rows={4}
            maxLength={400}
          />
        </div>

        <div className="flex flex-1 items-start justify-end mt-6">
          <button
            className="text-white inline-flex h-12 items-center justify-center rounded-md px-4 text-3xl font-bold shadow-md bg-gradient-to-br from-red-600 to-purple-600 hover:bg-gradient-to-br hover:from-red-700 hover:to-purple-700 active:bg-rose-400"
            onClick={onClose}
          >
            post
          </button>
        </div>
      </div>
    </div>
  );
}