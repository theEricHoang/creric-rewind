export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-l from-rose-300 to-pink-400">
      <div className="p-5 border-white/40 border rounded-md bg-white/30 backdrop-blur-md shadow-lg">
        <h1 className="text-white text-5xl text-center">login</h1>

        <form className="flex flex-col">
          <label className="pr-2 text-white text-2xl" htmlFor="username">username</label>
          <input
            className="px-2 py-1 rounded-md border border-white text-black"
            type="text" id="username" name="username" placeholder="username"
          />

          <label className="pr-2 text-white text-2xl" htmlFor="password">password</label>
          <input
            className="px-2 py-1 rounded-md border border-white text-black"
            type="password" id="password" name="password" placeholder="password"
          />

          <button
            className="p-2 border-white/40 border shadow-md rounded-md text-2xl hover:bg-white/30 mt-5"
            type="submit" 
          >
            go go go!!!
          </button>
        </form>
      </div>
    </div>
  );
}