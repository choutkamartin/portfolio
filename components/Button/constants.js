const DEFAULT =
  "inline-block group relative px-6 py-3 font-bold text-black no-underline";

const SIZE = {
  sm: "px-2.5 py-1.5 text-xs",
  base: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
  xl: "px-8 py-4 text-base",
};

const ICON = {
  sm: "-ml-0.5 mr-2 h-4 w-4",
  base: "-ml-1 mr-2 h-5 w-5",
  md: "-ml-1 mr-2 h-5 w-5",
  lg: "-ml-1 mr-3 h-5 w-5",
  xl: "-ml-1 mr-3 h-5 w-5",
};

const STYLE = {
  primary: ["bg-sky-400 dark:bg-sky-600", "text-black dark:text-white"],
  secondary: ["bg-blue-400 dark:bg-blue-600", "text-gray-600 dark:text-white"],
  white:
    "text-primary-500 hover:text-white bg-white hover:bg-primary-500 focus:ring-primary-500",
};

export { DEFAULT, SIZE, ICON, STYLE };
