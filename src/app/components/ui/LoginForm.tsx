export default function LoginForm() {
  return (
    <form
      className="flex flex-col"
    >
      <label className="pr-2 text-white text-2xl" htmlFor="username">username</label>
      <input
        className="px-2 py-1 rounded-md border border-white text-black"
        type="text" id="username" name="username" placeholder="username" required
      />

      <label className="pr-2 text-white text-2xl" htmlFor="password">password</label>
      <input
        className="px-2 py-1 rounded-md border border-white text-black"
        type="password" id="password" name="password" placeholder="password" required
      />

      <button
        className="p-2 border-white/40 border shadow-md rounded-md text-2xl hover:bg-white/30 mt-5"
        type="submit" 
      >
        go go go!!!
      </button>
    </form>
  );
}