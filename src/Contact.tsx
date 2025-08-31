import { Label, Textarea, TextInput, Checkbox, Button, ThemeProvider, createTheme, HelperText, Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { useState } from "react";
import MyNavbar from "./Components/MyNavbar";

const customTheme = createTheme({
  label: {
    root: {
      base: "text-sm font-medium",
      disabled: "opacity-50",
      colors: {
        default: "text-gray-900 dark:text-white",
        info: "text-cyan-500 dark:text-cyan-600",
        failure: "text-red-700 dark:text-red-500",
        warning: "text-yellow-500 dark:text-yellow-600",
        success: "text-green-700 dark:text-green-500"
      }
    }
  },
  textInput: {
    base: "flex",
    addon: "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400"
      },
      input: {
        base: "block w-full border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base"
        },
        colors: {
          gray: "border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
          info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        },
        withRightIcon: {
          on: "pr-10",
          off: ""
        },
        withIcon: {
          on: "pl-10",
          off: ""
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg"
        },
        withShadow: {
          on: "shadow-sm dark:shadow-sm-light",
          off: ""
        }
      }
    }
  },
  checkbox: {
    base: "h-4 w-4 appearance-none rounded border border-gray-300 bg-gray-100 bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:checked:border-transparent dark:checked:bg-current",
    color: {
      default: "text-primary-600 focus:ring-primary-600 dark:ring-offset-gray-800 dark:focus:ring-primary-600",
      dark: "text-gray-800 focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800",
      failure: "text-red-900 focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900",
      gray: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      info: "text-cyan-800 focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800",
      light: "text-gray-900 focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900",
      purple: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600",
      success: "text-green-800 focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800",
      warning: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400",
      blue: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700",
      cyan: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600",
      green: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600",
      indigo: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
      lime: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700",
      pink: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600",
      red: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600",
      teal: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600",
      yellow: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
    },
    indeterminate: "border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current"
  },
  textarea: {
    base: "block w-full rounded-lg border p-2.5 text-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
    colors: {
      gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500",
      info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
      failure: "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
      warning: "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
      success: "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
    },
    withShadow: {
      on: "shadow-sm dark:shadow-sm-light",
      off: ""
    }
  },
  modal: {
    root: {
      base: "fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
      show: {
        on: "flex bg-gray-900/50 dark:bg-gray-900/80",
        off: "hidden"
      },
      sizes: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        "4xl": "max-w-4xl",
        "5xl": "max-w-5xl",
        "6xl": "max-w-6xl",
        "7xl": "max-w-7xl"
      },
      positions: {
        topLeft: "items-start justify-start",
        topCenter: "items-start justify-center",
        topRight: "items-start justify-end",
        centerLeft: "items-center justify-start",
        center: "items-center justify-center",
        centerRight: "items-center justify-end",
        bottomRight: "items-end justify-end",
        bottomCenter: "items-end justify-center",
        bottomLeft: "items-end justify-start"
      }
    },
    content: {
      base: "relative h-full w-full p-4 md:h-auto",
      inner: "relative flex max-h-[90dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
    },
    body: {
      base: "flex-1 overflow-auto p-6",
      popup: "pt-0"
    },
    header: {
      base: "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
      popup: "border-b-0 p-2",
      title: "text-xl font-medium text-gray-900 dark:text-white",
      close: {
        base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
        icon: "h-5 w-5"
      }
    },
    footer: {
      base: "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
      popup: "border-t"
    }
  }
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [accept, setAccept] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    if (name && email && message && accept) {
      return setOpenModal(true);
    }
  }

  return (
    <ThemeProvider theme={customTheme}>
      <header>
        <MyNavbar />
      </header>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Et in id quis cupidatat</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Aliqua amet est voluptate consectetur dolor nostrud. Consectetur amet eiusmod consectetur quis ullamco sunt sit enim. Pariatur ad duis sint cupidatat magna et aliquip et excepteur do quis ea. Id excepteur nisi cupidatat voluptate ad nisi. Quis anim pariatur sint laborum nisi anim eu nisi exercitation. Dolor Lorem et enim et commodo ipsum ipsum duis id proident ullamco nisi.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Commodo ex voluptate excepteur fugiat amet veniam deserunt ex qui ex commodo est reprehenderit. Reprehenderit eiusmod ullamco ut voluptate dolore ea deserunt nulla. Aliquip qui minim aute do eu ea ullamco ea incididunt consectetur ea nulla exercitation. Deserunt Lorem magna ex enim in culpa qui consectetur est ea. Velit laborum et enim culpa fugiat proident laboris exercitation sit aliqua sint consectetur aute voluptate. Eu ipsum ex sint reprehenderit deserunt occaecat elit est minim.
            </p>
          </div>
        </ModalBody>
        <ModalFooter className="inline-flex justify-end">
          <Button onClick={() => setOpenModal(false)}>Okay</Button>
        </ModalFooter>
      </Modal>

      <main className="py-12 bg-white dark:bg-gray-900 min-h-screen">
        <section className="max-w-7xl mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-auto bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
          <div className="p-6">
            <h1 className="text-2xl sm:text-3xl mb-4">Contact</h1>
            <p className="mb-6">Excepteur duis exercitation est reprehenderit et elit ut commodo adipisicing adipisicing elit proident occaecat reprehenderit. Mollit dolor eu ullamco duis magna ut consectetur dolor nulla ex dolore. Mollit nulla voluptate Lorem consectetur est labore laboris ut minim. Quis ad dolor ullamco culpa culpa do est irure fugiat do laborum aliquip aute ea.</p>

            <div className="flex justify-center">
              <form className="flex max-w-lg w-lg rounded-lg flex-col gap-4 p-4 bg-gray-200 dark:bg-gray-900"
                onSubmit={handleSubmit}>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name1" color={name === "" && submitted ? "failure" : "gray"}>Your name</Label>
                  </div>
                  <TextInput id="name1" type="text" placeholder="John Doe" color={name === "" && submitted ? "failure" : "gray"} onChange={(e) => setName(e.target.value)} />
                  {submitted && name === "" && (
                    <HelperText>
                      <span className="font-medium">Oops!</span> Username is required!
                    </HelperText>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" color={email === "" && submitted ? "failure" : "gray"}>Your email</Label>
                  </div>
                  <TextInput id="email1" type="email" color={email === "" && submitted ? "failure" : "gray"} onChange={(e) => setEmail(e.target.value)} placeholder="name@johnDoe.com" />
                  {submitted && email === "" && (
                    <HelperText>
                      <span className="font-medium">Oops!</span> Email is required!
                    </HelperText>
                  )}
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="message1" color={message === "" && submitted ? "failure" : "gray"}>Your message</Label>
                  </div>
                  <Textarea id="message1" color={message === "" && submitted ? "failure" : "gray"} onChange={(e) => setMessage(e.target.value)} placeholder="Leave a message..." rows={4} />
                  {submitted && message === "" && (
                    <HelperText>
                      <span className="font-medium">Oops!</span> Message is required!
                    </HelperText>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="accept" color={accept === false && submitted ? "failure" : "gray"} onChange={(e) => setAccept(e.target.checked)} />
                    <Label htmlFor="accept" color={accept === false && submitted ? "failure" : "gray"} className="flex">
                      I agree with the&nbsp;
                      <a href="#home" className="text-cyan-600 hover:underline dark:text-cyan-500">
                        terms and conditions
                      </a>
                    </Label>
                  </div>
                  {submitted && message === "" && (
                    <HelperText>
                      <span className="font-medium">Oops!</span> You must agree with the terms and conditions!
                    </HelperText>
                  )}
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>

          </div>
        </section>
      </main>
    </ThemeProvider>
  );
}
