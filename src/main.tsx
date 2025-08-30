import { initThemeMode } from "flowbite-react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router";
import App from "./App.tsx";
import "./index.css";

const routes = createHashRouter([
  {
    path: "/",
    Component: App,
  }
]);

createRoot(document.getElementById("root")!).render(
  <>
    <ThemeInit />
    <RouterProvider router={routes} />
  </>,
);

initThemeMode();
