export const DarkMode = () => (
  <div className="m-auto flex max-w-md flex-col space-y-3 rounded-lg bg-gray-900">
    {/* Title & Switch mode icon*/}
    <div className="flex justify-between px-6 pt-6">
      <h1 className="text-xl font-bold text-white">Night mode is here.</h1>
      <button className="cursor-pointer select-none text-xl transition-all hover:rotate-45" onClick={() => {}}>
        🌞
      </button>
    </div>

    {/* Description */}
    <p className="px-6 pb-3 text-gray-500">
      Support for dark mode is now available with two strategies: media query and parent class.
    </p>

    {/* Footer */}
    <div className="flex items-center justify-end space-x-4 rounded-b-lg bg-gray-800 py-3 px-6 font-medium drop-shadow">
      <div className="cursor-pointer text-green-500 hover:text-green-400">No thanks</div>
      <span className="bg h-full w-0.5 bg-gray-600" />
      <div
        className="cursor-pointer rounded-full bg-green-300 py-0.5 px-4 text-green-700 
       hover:bg-green-200 hover:text-green-600">
        Try now
      </div>
    </div>
  </div>
);
