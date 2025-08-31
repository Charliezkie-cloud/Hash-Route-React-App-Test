import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, createTheme, ThemeProvider } from "flowbite-react";
import MyNavbar from "./Components/MyNavbar";
import React from "react";

const accordionTheme = createTheme({
  accordion: {
    root: {
      base: "divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700",
      flush: {
        off: "rounded-lg border",
        on: "border-b"
      }
    },
    content: {
      base: "p-5 first:rounded-t-lg last:rounded-b-lg dark:bg-gray-900"
    },
    title: {
      arrow: {
        base: "h-6 w-6 shrink-0",
        open: {
          off: "",
          on: "rotate-180"
        }
      },
      base: "flex w-full items-center justify-between p-5 text-left font-medium text-gray-500 first:rounded-t-lg last:rounded-b-lg dark:text-gray-400",
      flush: {
        off: "hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-700",
        on: "bg-transparent dark:bg-transparent"
      },
      heading: "",
      open: {
        off: "",
        on: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
      }
    }
  }
});

export default function About() {
  const accordionItems = [
    <AccordionPanel>
      <AccordionTitle>Aute quis cupidatat elit aute tempor.</AccordionTitle>
      <AccordionContent>
        <p className="mb-3">Sint velit deserunt irure qui est nulla anim commodo in non est deserunt. Fugiat fugiat excepteur eu culpa elit occaecat et laborum laborum. In culpa labore sit Lorem aliquip in aliqua ad sit reprehenderit. Aute aliquip nostrud dolor dolor ullamco commodo incididunt excepteur Lorem.</p>
        <p className="mb-3">Reprehenderit laboris irure incididunt occaecat voluptate sit labore culpa voluptate ad ipsum et. Cillum ad non ea cupidatat elit aute ullamco esse duis exercitation consectetur nostrud. Est culpa laborum ut enim incididunt ex qui non ad fugiat. Proident eiusmod nulla pariatur Lorem consequat non velit esse minim ipsum. Fugiat amet aliquip non irure sint est in consectetur. Magna non culpa occaecat incididunt laboris pariatur proident proident labore aute officia pariatur.</p>
        <p className="mb-3">Nostrud culpa eiusmod Lorem ut ea nisi eu officia ea aliquip. Tempor ut reprehenderit cillum nisi non. Officia culpa adipisicing eiusmod labore et consectetur cillum proident elit commodo officia. Tempor eu incididunt sint nostrud incididunt dolor non commodo exercitation nulla incididunt. Ipsum sint veniam reprehenderit proident excepteur ut consectetur veniam eu do amet nostrud do.</p>
        <p className="mb-3">Lorem laboris nulla ad fugiat culpa sunt. Exercitation qui cupidatat aute dolor eiusmod aliqua mollit deserunt est tempor incididunt. Culpa eiusmod labore elit mollit.</p>
        <p>Excepteur duis exercitation est reprehenderit et elit ut commodo adipisicing adipisicing elit proident occaecat reprehenderit. Mollit dolor eu ullamco duis magna ut consectetur dolor nulla ex dolore. Mollit nulla voluptate Lorem consectetur est labore laboris ut minim. Quis ad dolor ullamco culpa culpa do est irure fugiat do laborum aliquip aute ea.</p>
      </AccordionContent>
    </AccordionPanel>,
    <AccordionPanel>
      <AccordionTitle>Ipsum Lorem labore laboris et dolor anim qui veniam laboris consectetur pariatur ut.</AccordionTitle>
      <AccordionContent>
        <p className="mb-3">Sint culpa esse aliquip deserunt elit esse non incididunt consectetur exercitation amet. Ut non fugiat amet sunt commodo do anim elit. Laborum minim id proident enim. Quis excepteur elit occaecat dolor sunt ad do elit irure amet. Sint mollit in adipisicing velit sunt. Ea commodo in qui aliqua voluptate quis ullamco sunt non. Deserunt consequat laboris aliquip fugiat.</p>
        <p className="mb-3">Dolore consectetur sit consequat est eu consequat ipsum excepteur incididunt adipisicing duis. Lorem magna laboris ea proident excepteur esse aliquip esse ea sunt nulla irure. Ad laborum laborum elit id ut qui nisi ex. Laboris dolore sunt aute deserunt adipisicing veniam mollit sint occaecat pariatur proident. Esse laborum anim minim est ullamco voluptate aliqua nulla enim ullamco mollit elit. Deserunt commodo sunt duis labore commodo magna.</p>
        <p className="mb-3">In ea non ullamco enim Lorem culpa deserunt. Excepteur fugiat enim qui esse. Duis qui ea fugiat esse aute consectetur nisi eiusmod nulla et. Consequat velit aliquip excepteur commodo ut cillum. Excepteur ullamco laboris voluptate Lorem voluptate Lorem cillum. Voluptate anim dolore velit pariatur ut. Amet officia esse ex eiusmod qui velit eu ipsum sunt commodo consequat.</p>
        <p className="mb-3">Consectetur quis labore nostrud ex enim. Minim ullamco commodo in mollit consequat. Commodo est elit sint fugiat officia ea amet consectetur minim laboris.</p>
        <p>Ex consectetur Lorem et nisi. In ullamco culpa consectetur reprehenderit anim. Eiusmod velit eu anim labore ut. Ipsum ut in aliquip duis labore nostrud tempor eu. Sit amet voluptate eu ea anim laboris ut reprehenderit voluptate irure Lorem deserunt reprehenderit. Pariatur ea irure occaecat aliqua eu officia esse dolore voluptate aliquip sit sunt. Veniam laborum proident ad laboris do aute nulla amet fugiat nostrud labore quis.</p>
      </AccordionContent>
    </AccordionPanel>,
    <AccordionPanel>
      <AccordionTitle>Eiusmod occaecat cupidatat sint non laboris ipsum proident culpa.</AccordionTitle>
      <AccordionContent>
        <p className="mb-3">Enim aute qui sit tempor dolore officia. Excepteur non reprehenderit eiusmod proident. Dolore Lorem exercitation elit minim. Esse ea cillum laborum ullamco. Cillum cupidatat ex laboris sit cupidatat cillum.</p>
        <p className="mb-3">Ut ea consequat qui pariatur ex fugiat pariatur nisi mollit minim. Exercitation labore culpa commodo quis amet deserunt amet anim do laboris ex minim nostrud labore. Officia non laboris irure Lorem.</p>
        <p className="mb-3">Nulla ea tempor anim nisi ex excepteur. Velit duis ad ut nulla mollit exercitation deserunt tempor exercitation. Et consequat labore reprehenderit Lorem labore aliquip ex mollit. Mollit sint nulla do pariatur amet laboris eiusmod est ipsum. Culpa dolore duis minim cupidatat et quis consectetur magna nostrud aliqua tempor. Dolor elit dolor non occaecat.</p>
        <p className="mb-3">Mollit adipisicing deserunt enim eu. Culpa enim sit aliquip consectetur culpa adipisicing. Occaecat dolore occaecat occaecat ea. Id quis sit non aliqua. Ea in ipsum pariatur officia non excepteur qui nostrud ea deserunt tempor et non sint. Dolore exercitation commodo irure ad amet.</p>
        <p>Sint quis occaecat occaecat esse consectetur ex nulla et cillum esse labore et. Duis voluptate anim sint incididunt cillum commodo tempor. Irure velit duis consequat Lorem velit cillum cillum dolor id Lorem aliqua. Commodo eiusmod nulla laborum consectetur culpa dolor mollit do aliqua. Nostrud reprehenderit quis consequat sit deserunt Lorem et. Mollit ex amet labore consectetur ipsum id. Culpa Lorem reprehenderit dolore exercitation sit veniam elit.</p>
      </AccordionContent>
    </AccordionPanel>
  ];

  return (
    <>
      <header>
        <MyNavbar />
      </header>

      <main className="py-12 bg-white dark:bg-gray-900 min-h-screen">
        <section className="max-w-7xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-auto bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
          <div className="p-6">
            <h1 className="text-2xl sm:text-3xl mb-4">About</h1>
            <p className="mb-3">Nostrud culpa eiusmod Lorem ut ea nisi eu officia ea aliquip. Tempor ut reprehenderit cillum nisi non. Officia culpa adipisicing eiusmod labore et consectetur cillum proident elit commodo officia. Tempor eu incididunt sint nostrud incididunt dolor non commodo exercitation nulla incididunt. Ipsum sint veniam reprehenderit proident excepteur ut consectetur veniam eu do amet nostrud do.</p>
            <p className="mb-3">Lorem laboris nulla ad fugiat culpa sunt. Exercitation qui cupidatat aute dolor eiusmod aliqua mollit deserunt est tempor incididunt. Culpa eiusmod labore elit mollit.</p>
            <p className="mb-6">Excepteur duis exercitation est reprehenderit et elit ut commodo adipisicing adipisicing elit proident occaecat reprehenderit. Mollit dolor eu ullamco duis magna ut consectetur dolor nulla ex dolore. Mollit nulla voluptate Lorem consectetur est labore laboris ut minim. Quis ad dolor ullamco culpa culpa do est irure fugiat do laborum aliquip aute ea.</p>
            <p className="mb-3">Reprehenderit laboris irure incididunt occaecat voluptate sit labore culpa voluptate ad ipsum et. Cillum ad non ea cupidatat elit aute ullamco esse duis exercitation consectetur nostrud. Est culpa laborum ut enim incididunt ex qui non ad fugiat. Proident eiusmod nulla pariatur Lorem consequat non velit esse minim ipsum. Fugiat amet aliquip non irure sint est in consectetur. Magna non culpa occaecat incididunt laboris pariatur proident proident labore aute officia pariatur.</p>
            <p className="mb-3">Sint velit deserunt irure qui est nulla anim commodo in non est deserunt. Fugiat fugiat excepteur eu culpa elit occaecat et laborum laborum. In culpa labore sit Lorem aliquip in aliqua ad sit reprehenderit. Aute aliquip nostrud dolor dolor ullamco commodo incididunt excepteur Lorem.</p>

            <ThemeProvider theme={accordionTheme}>
              <Accordion>
                {
                  accordionItems.map((item, index) => (
                    React.cloneElement(item, { key: index })
                  ))
                }
              </Accordion>
            </ThemeProvider>
          </div>
        </section>
      </main>
    </>
  )
}