function AIAssistant() {
  return (
    <div className="rounded-2xl border border-violet-500/20 bg-linear-to-br from-violet-950 to-zinc-900 p-6">

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-2xl">
          🤖
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            BusinessOS AI
          </h3>

          <p className="text-sm text-gray-400">
            Your Business Assistant
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-black/30 p-4">

        <p className="text-gray-300">
          Good Morning 👋
        </p>

        <p className="mt-3 text-white">
          Revenue increased
          <span className="font-bold text-green-400">
            {" "}18%
          </span>
          {" "}this week.
        </p>

        <p className="mt-3 text-gray-300">
          Inventory for
          <span className="text-violet-400">
            {" "}Wireless Mouse
          </span>
          {" "}is getting low.
        </p>

      </div>

      <div className="mt-6 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-gray-500">
        Ask BusinessOS AI...
      </div>

    </div>
  );
}

export default AIAssistant;