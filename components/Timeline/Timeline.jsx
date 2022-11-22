import { CalendarIcon } from "@heroicons/react/24/solid";

const Timeline = ({ children }) => {
  return (
    <ol className="relative left-4 border-l border-gray-200 dark:border-gray-700">
      {children}
    </ol>
  );
};

const Item = ({ title, date, description }) => {
  return (
    <li className="mb-10 ml-10">
      <span className="absolute -left-4 flex h-8 w-8 items-center justify-center bg-sky-400 ring-8 ring-gray-50 dark:bg-blue-900 dark:ring-gray-900">
        <CalendarIcon className="h-5 w-5 text-white" />
      </span>
      <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {date}
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
};

Timeline.Item = Item;
export default Timeline;
