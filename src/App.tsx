import Home from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import About from "./pages/About/About";
import {
  // createBrowserRouter,
  // // RouterProvider,
  // // createRoutesFromElements,
  // BrowserRouter,
  // Route,
  // Routes,
  useRoutes,
} from "react-router-dom";

function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return router;

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="home" element={<Home />}>
  //       <Route index element={<Home />} />
  //       <Route path="about" element={<About />} />
  //       <Route path="contact" element={<Contact />} />
  //     </Route>
  //   )
  // );
  // return (
  //   <>
  //     {/* <RouterProvider router={router} /> */}
  //     {/* <BrowserRouter>
  //       <Routes>
  //         <Route path="Home" element={<Home />}>
  //           <Route index element={<Home />} />
  //           <Route path="about" element={<About />} />
  //           <Route path="contact" element={<Contact />} />
  //         </Route>
  //       </Routes>
  //     </BrowserRouter> */}
  //   </>
  // );
}

export default App;
