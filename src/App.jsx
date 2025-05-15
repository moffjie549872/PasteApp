import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Paste from "./components/Paste"; // ✅ added this
import ViewPaste from "./components/ViewPaste";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
      </div>
    ),
  },
  {
    path: "/paste",
    element: (
      <div>
        <NavBar />
        <Paste />
      </div>
    ), 
  },
  {
    path: "/paste/:id",
    element: (
      <div>
        <NavBar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>CodeHelp.in</div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
