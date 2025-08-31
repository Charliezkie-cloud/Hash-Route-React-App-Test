import { createTheme, ThemeProvider, Card } from "flowbite-react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import MyNavbar from "./Components/MyNavbar";

const customTheme = createTheme({
  card: {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800",
      children: "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row"
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      }
    }
  }
});

export default function Pricing() {
  const cardItems = [
    <Card href="https://flowbite-react.com/docs/components/card" className="max-w-full">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Laborum excepteur</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">49</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Eu non culpa</span>
        </li>
        <li className="flex space-x-3">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Nostrud laboris aliquip</span>
        </li>
        <li className="flex space-x-3">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Veniam Lorem reprehenderit</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Ullamco Lorem exercitation</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Tempor enim veniam</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Adipisicing nulla anim</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Reprehenderit voluptate pariatur</span>
        </li>
      </ul>
      <button type="button" className="mt-auto inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900">
        Choose plan
      </button>
    </Card>,
    <Card href="https://flowbite-react.com/docs/components/card" className="max-w-full">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Ad dolor voluptate</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">98</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Eu non culpa</span>
        </li>
        <li className="flex space-x-3">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Nostrud laboris aliquip</span>
        </li>
        <li className="flex space-x-3">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Veniam Lorem reprehenderit</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Ullamco Lorem exercitation</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Tempor enim veniam</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Adipisicing nulla anim</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Reprehenderit voluptate pariatur</span>
        </li>
      </ul>
      <button type="button" className="mt-auto inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900">
        Choose plan
      </button>
    </Card>,
    <Card href="https://flowbite-react.com/docs/components/card" className="max-w-full">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Minim irure</h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">147</span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
      </div>
      <ul className="my-7 space-y-5">
        <li className="flex space-x-3">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Eu non culpa</span>
        </li>
        <li className="flex space-x-3">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Nostrud laboris aliquip</span>
        </li>
        <li className="flex space-x-3">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500" />
          <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Veniam Lorem reprehenderit</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Ullamco Lorem exercitation</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Tempor enim veniam</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Adipisicing nulla anim</span>
        </li>
        <li className="flex space-x-3 line-through decoration-gray-500">
          <CheckCircleIcon className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <span className="text-base font-normal leading-tight text-gray-500">Reprehenderit voluptate pariatur</span>
        </li>
      </ul>
      <button type="button" className="mt-auto inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900">
        Choose plan
      </button>
    </Card>,
  ]

  return (
    <>
      <header>
        <MyNavbar />
      </header>

      <main className="py-12 bg-white dark:bg-gray-900 min-h-screen">
        <section className="max-w-7xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-auto bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
          <div className="p-6">
            <h1 className="text-2xl sm:text-3xl mb-4">Pricing</h1>
            <p className="mb-3">Nostrud culpa eiusmod Lorem ut ea nisi eu officia ea aliquip. Tempor ut reprehenderit cillum nisi non. Officia culpa adipisicing eiusmod labore et consectetur cillum proident elit commodo officia. Tempor eu incididunt sint nostrud incididunt dolor non commodo exercitation nulla incididunt. Ipsum sint veniam reprehenderit proident excepteur ut consectetur veniam eu do amet nostrud do.</p>

            <ThemeProvider theme={customTheme}>
              <div className="inline-flex flex-col md:flex-row min-w-full justify-center gap-4">
                {
                  cardItems.map((item, index) => (
                    React.cloneElement(item, { key: index })
                  ))
                }
              </div>
            </ThemeProvider>

          </div>
        </section>
      </main>
    </>
  )
}