import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";

import ToolTip from "./ToolTip";

interface SelectProps {
  selected: string;
  options: { label: string; value: string }[];
  tip?: string;
  onChange: (selected: string) => void;
}

export default function Select({ selected, options, tip, onChange }: SelectProps) {
  function ListBoxButton() {
    return (
      <ListboxButton className="group peer flex w-full items-center justify-between rounded px-2 capitalize transition-all dark:focus-visible:bg-slate-700 dark:hover:bg-slate-700 dark:ui-open:bg-slate-700 focus-visible:bg-gray-200 hover:bg-gray-200 ui-open:bg-gray-200">
        {options.find((option) => option.value === selected)?.label}
        <i className="i-tabler-chevron-down hidden group-focus-visible:flex group-hover:flex ui-open:flex" />
      </ListboxButton>
    );
  }

  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative w-full">
        {tip ? (
          <ToolTip tip={tip}>
            <ListBoxButton />
          </ToolTip>
        ) : (
          <ListBoxButton />
        )}
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <ListboxOptions
            as="div"
            anchor="bottom"
            className="z-40 mt-1 flex w-[var(--button-width)] flex-col rounded-md border-2 border-gray-300 bg-white py-1 shadow dark:border-slate-700 dark:bg-slate-900"
          >
            {options.map((item) => (
              <ListboxOption key={item.value} value={item.value}>
                {({ focus, selected }) => (
                  <li
                    className={`${focus || selected ? "text-sky-500" : "text-current"} box-content flex cursor-pointer items-center justify-between px-[6px] capitalize transition-all focus:z-10 dark:focus:bg-slate-700 dark:hover:bg-slate-700 dark:ui-active:bg-slate-700 focus:bg-gray-200 hover:bg-gray-200 ui-active:bg-gray-200`}
                  >
                    {item.label}
                    {selected && <i className="i-tabler-check" />}
                  </li>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  );
}
