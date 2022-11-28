import { Tab as HeadlessTab } from "@headlessui/react";

const Tab = ({ children, active }) => {
  return (
    <HeadlessTab className="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300">
      {children}
      {active}
    </HeadlessTab>
  );
};

const Group = ({ children }) => {
  return <HeadlessTab.Group>{children}</HeadlessTab.Group>;
};

const List = ({ children }) => {
  return (
    <HeadlessTab.List className="text border-b border-gray-200 text-center font-medium text-gray-800 dark:border-gray-700 dark:text-gray-400">
      <div className="-mb-px flex flex-wrap">{children}</div>
    </HeadlessTab.List>
  );
};

const Panels = ({ children }) => {
  return <HeadlessTab.Panels>{children}</HeadlessTab.Panels>;
};

const Panel = ({ children }) => {
  return <HeadlessTab.Panel>{children}</HeadlessTab.Panel>;
};

Tab.Group = Group;
Tab.List = List;
Tab.Panels = Panels;
Tab.Panel = Panel;
export default Tab;
