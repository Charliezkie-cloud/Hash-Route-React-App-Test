import { useState } from "react";
import { Button, ButtonGroup } from "flowbite-react";
import { PlusIcon, MinusIcon, ArrowPathIcon } from '@heroicons/react/24/solid'
import MyNavbar from "./components/MyNavbar";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <MyNavbar />
      </header>

      <main className="py-12 bg-white dark:bg-gray-900 min-h-screen">
        <section className="max-w-7xl mx-auto bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
          <div className="p-6">
            <h1 className="text-2xl sm:text-3xl mb-4">Home</h1>
            <p className="mb-3">Sint velit deserunt irure qui est nulla anim commodo in non est deserunt. Fugiat fugiat excepteur eu culpa elit occaecat et laborum laborum. In culpa labore sit Lorem aliquip in aliqua ad sit reprehenderit. Aute aliquip nostrud dolor dolor ullamco commodo incididunt excepteur Lorem.</p>
            <p className="mb-3">Reprehenderit laboris irure incididunt occaecat voluptate sit labore culpa voluptate ad ipsum et. Cillum ad non ea cupidatat elit aute ullamco esse duis exercitation consectetur nostrud. Est culpa laborum ut enim incididunt ex qui non ad fugiat. Proident eiusmod nulla pariatur Lorem consequat non velit esse minim ipsum. Fugiat amet aliquip non irure sint est in consectetur. Magna non culpa occaecat incididunt laboris pariatur proident proident labore aute officia pariatur.</p>
            <p className="mb-3">Nostrud culpa eiusmod Lorem ut ea nisi eu officia ea aliquip. Tempor ut reprehenderit cillum nisi non. Officia culpa adipisicing eiusmod labore et consectetur cillum proident elit commodo officia. Tempor eu incididunt sint nostrud incididunt dolor non commodo exercitation nulla incididunt. Ipsum sint veniam reprehenderit proident excepteur ut consectetur veniam eu do amet nostrud do.</p>
            <p className="mb-3">Lorem laboris nulla ad fugiat culpa sunt. Exercitation qui cupidatat aute dolor eiusmod aliqua mollit deserunt est tempor incididunt. Culpa eiusmod labore elit mollit.</p>
            <p className="mb-4">Excepteur duis exercitation est reprehenderit et elit ut commodo adipisicing adipisicing elit proident occaecat reprehenderit. Mollit dolor eu ullamco duis magna ut consectetur dolor nulla ex dolore. Mollit nulla voluptate Lorem consectetur est labore laboris ut minim. Quis ad dolor ullamco culpa culpa do est irure fugiat do laborum aliquip aute ea.</p>

            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-xl sm:text-2xl mb-4">Count: <span className="font-semibold">{count}</span></h2>
              <ButtonGroup>
                <Button className='inline-flex gap-2' onClick={() => setCount(count + 1)}>
                  <PlusIcon className="size-4" />
                  Increment
                </Button>
                <Button className='inline-flex gap-2' onClick={() => setCount(0)}>
                  <ArrowPathIcon className="size-4" />
                  Reset
                </Button>
                <Button className='inline-flex gap-2' onClick={() => setCount(count - 1)}>
                  <MinusIcon className="size-4" />
                  Decrement
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
