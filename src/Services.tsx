import { Button, Card, createTheme, ThemeProvider } from "flowbite-react"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import MyNavbar from "./Components/MyNavbar"
import Image1 from "./Images/1.jpg";
import Image2 from "./Images/2.jpg";
import Image3 from "./Images/3.jpg";
import React from "react";

const cardTheme = createTheme({
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

export default function Services() {
  const cardItems = [
    <Card href="https://flowbite-react.com/docs/components/card" className="max-w-full" imgSrc={Image1} imgAlt="Incididunt id aliqua ut.">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Adipisicing
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Amet incididunt pariatur nulla ut qui reprehenderit dolore aliqua cillum duis exercitation id dolore.
      </p>
      <Button className="mt-auto">
        Learn More
        <ArrowRightIcon className="size-5" />
      </Button>
    </Card>,
    <Card href="https://flowbite-react.com/docs/components/card" className="max-w-full" imgSrc={Image2} imgAlt="Incididunt id aliqua ut.">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Incididunt
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Cillum dolore dolore deserunt do nisi aliquip fugiat laboris id ex incididunt.
      </p>
      <Button className="mt-auto">
        Learn More
        <ArrowRightIcon className="size-5" />
      </Button>
    </Card>,
    <Card href="https://flowbite-react.com/docs/components/card" className="max-w-full" imgSrc={Image3} imgAlt="Incididunt id aliqua ut.">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Tempor
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Ea est amet reprehenderit veniam dolore adipisicing.
      </p>
      <Button className="mt-auto">
        Learn More
        <ArrowRightIcon className="size-5" />
      </Button>
    </Card>
  ]

  return (
    <>
      <header>
        <MyNavbar />
      </header>

      <main className="py-12 bg-white dark:bg-gray-900 min-h-screen">
        <section className="max-w-7xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-auto bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
          <div className="p-6">
            <h1 className="text-2xl sm:text-3xl mb-4">Services</h1>
            <p className="mb-3">Reprehenderit laboris irure incididunt occaecat voluptate sit labore culpa voluptate ad ipsum et. Cillum ad non ea cupidatat elit aute ullamco esse duis exercitation consectetur nostrud. Est culpa laborum ut enim incididunt ex qui non ad fugiat. Proident eiusmod nulla pariatur Lorem consequat non velit esse minim ipsum. Fugiat amet aliquip non irure sint est in consectetur. Magna non culpa occaecat incididunt laboris pariatur proident proident labore aute officia pariatur.</p>
            <p className="mb-3">Sint velit deserunt irure qui est nulla anim commodo in non est deserunt. Fugiat fugiat excepteur eu culpa elit occaecat et laborum laborum. In culpa labore sit Lorem aliquip in aliqua ad sit reprehenderit. Aute aliquip nostrud dolor dolor ullamco commodo incididunt excepteur Lorem.</p>
            <p className="mb-6">Excepteur duis exercitation est reprehenderit et elit ut commodo adipisicing adipisicing elit proident occaecat reprehenderit. Mollit dolor eu ullamco duis magna ut consectetur dolor nulla ex dolore. Mollit nulla voluptate Lorem consectetur est labore laboris ut minim. Quis ad dolor ullamco culpa culpa do est irure fugiat do laborum aliquip aute ea.</p>
            <p className="mb-3">Lorem laboris nulla ad fugiat culpa sunt. Exercitation qui cupidatat aute dolor eiusmod aliqua mollit deserunt est tempor incididunt. Culpa eiusmod labore elit mollit.</p>
            <p className="mb-3">Nostrud culpa eiusmod Lorem ut ea nisi eu officia ea aliquip. Tempor ut reprehenderit cillum nisi non. Officia culpa adipisicing eiusmod labore et consectetur cillum proident elit commodo officia. Tempor eu incididunt sint nostrud incididunt dolor non commodo exercitation nulla incididunt. Ipsum sint veniam reprehenderit proident excepteur ut consectetur veniam eu do amet nostrud do.</p>

            <ThemeProvider theme={cardTheme}>
              <div className="inline-flex flex-col sm:flex-row gap-4">
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