import { initThemeMode } from "flowbite-react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router";
import "./index.css";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Services from "./Services.tsx";
import Pricing from "./Pricing.tsx";
import Contact from "./Contact.tsx";

const routes = createHashRouter([
  { path: "/", Component: Home, },
  { path: "/about", Component: About },
  { path: "/services", Component: Services },
  { path: "/pricing", Component: Pricing },
  { path: "/contact", Component: Contact },
]);

createRoot(document.getElementById("root")!).render(
  <>
    <ThemeInit />
    <RouterProvider router={routes} />
  </>
);

initThemeMode();
