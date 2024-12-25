import React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import "../output.css";

import {
  Bars3Icon,
  DocumentDuplicateIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Work", href: "/", icon: HomeIcon, current: false },
  { name: "About Me", href: "about", icon: UsersIcon, current: true },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1bgrS8xfV5URimU6wst4ukqTqaN_MWpZk/view?usp=sharing",
    icon: DocumentDuplicateIcon,
    current: false,
  },
];

const socialMedia = [
  {
    name: "GitHub",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
              <div className="flex h-16 shrink-0 items-center">
                <ul className="-mx-2 mt-2">
                  <li>
                    <h1 className="text-gray-400 flex gap-x-3 rounded-md p-2 text-xl font-semibold mt-4">
                      Marc Angelo Dilinila
                    </h1>
                  </li>
                  <li>
                    <p className="text-gray-400 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold">
                      Senior Software Engineer
                    </p>
                  </li>
                </ul>
              </div>
              <nav className="flex flex-1 flex-col">
                <ul className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-800 text-white"
                                : "text-gray-400 hover:bg-gray-800 hover:text-white",
                              "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className="size-6 shrink-0"
                            />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="-mx-6 mt-auto mb-10">
                    <div className="flex justify-center gap-x-6 md:order-2">
                      {socialMedia.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="text-gray-400 hover:text-gray-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="sr-only">{item.name}</span>
                          <item.icon aria-hidden="true" className="size-6" />
                        </a>
                      ))}
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <ul className="-mx-2 mt-2">
              <li>
                <h1 className="text-gray-400 flex gap-x-3 rounded-md p-2 text-xl font-semibold mt-4">
                  Marc Angelo Dilinila
                </h1>
              </li>
              <li>
                <p className="text-gray-400 group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold">
                  Senior Software Engineer
                </p>
              </li>
            </ul>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-800 text-white"
                            : "text-gray-400 hover:bg-gray-800 hover:text-white",
                          "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-6 shrink-0"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto mb-10">
                <div className="flex justify-center gap-x-6 md:order-2">
                  {socialMedia.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-400 hover:text-gray-300"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon aria-hidden="true" className="size-6" />
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="lg:pl-72 bg-gray-800">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>

          {/* Separator */}
          {/*<div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />*/}

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 ">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              {/* Separator */}
              {/*<div aria-hidden="true" className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" /> */}
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <ul className="">
                <li className="font-semibold text-3xl text-gray-200">
                  Hi there! I'm Marc.
                </li>
                <li className="flex justify-between gap-x-6 py-5 mt-4 mb-20">
                  <p className="text-gray-200">
                    Nice to meet you! I'm a software developer that's passionate
                    about designing and developing usable working solutions for
                    use by clients. I have experience working on Microservices
                    that are both scalable and quickly deployable. I have worked
                    in the cloud for some time and have worked on utilizing AWS
                    services such as S3, ECS, EC2 and Fargate. I have also
                    worked on the front end using React and Vue to create a
                    seamless user experience. Currently I'm working at Capital
                    One as a Senior Software Engineer fulfilling their mission
                    of changing banking for good. My main languages are Java and
                    Python{" "}
                  </p>
                </li>
              </ul>
              <div>
                <p className="text-xs/6 text-gray-400">
                  Developed in Visual Studio Code. Built with React.js and
                  Tailwind.css components. Delivered by Netlify, that offers
                  hosting of static sites for free. Code is available on GitHub.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
