import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import ServiceAreas from "./pages/ServiceAreas";
import BookAssessment from "./pages/BookAssessment";
import Contact from "./pages/Contact";
import "./globals.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/areas",
    element: <ServiceAreas />,
  },
  {
    path: "/book",
    element: <BookAssessment />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}
