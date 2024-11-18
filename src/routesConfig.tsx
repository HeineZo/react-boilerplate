import Home from "@routes/Home";
import Home2 from "@routes/Home2";

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
    label: "Accueil",
  },
  {
    path: "/home2",
    element: <Home2 />,
    label: "Home2",
  },
];
