interface DarkModeProps {
  isDark: boolean;
  setSwitchDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkMode = (props: DarkModeProps) => {
  // Render
  return (
    <div className="m-auto flex max-w-md flex-col space-y-3 rounded-lg bg-gray-100 dark:bg-gray-900">
      {/* Title & Switch mode icon*/}
      <div className="flex justify-between px-6 pt-6">
        <h1 className="text-xl font-bold dark:text-white">Night mode is here.</h1>
        <button
          className="cursor-pointer select-none text-xl transition-all hover:rotate-45"
          onClick={() => props.setSwitchDark(!props.isDark)}>
          {!props.isDark ? "🌚" : "🌞"}
        </button>
      </div>

      {/* Description */}
      <p className="px-6 pb-3 text-gray-500">
        Support for dark mode is now available with two strategies: media query and parent class.
      </p>

      {/* Footer */}
      <div className="flex select-none items-center justify-end space-x-6 rounded-b-lg bg-gray-200 py-3 px-6 font-medium drop-shadow dark:bg-gray-800">
        <div className="cursor-pointer text-green-500 hover:text-green-400">No thanks</div>
        <div
          className="cursor-pointer rounded-full bg-green-300 py-0.5 px-4
           text-green-700 hover:bg-green-200 hover:text-green-600">
          Try now
        </div>
      </div>
    </div>
  );
};
