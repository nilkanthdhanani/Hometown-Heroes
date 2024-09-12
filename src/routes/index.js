import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";
import Ausstellung2023 from "../modules/ausstellung2023";
import Impressum from "../modules/Impressum";
import Datenschutz from "../modules/datenschutz";
import Journey from "../modules/journey";
import Donate from "../modules/donate";
import Ausstellung2024 from "../modules/ausstellung2024";
import Lwandle from "../modules/lwandle";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/auss2023",
                element: <Ausstellung2023 />
            },
            {
                path: "/impressum",
                element: <Impressum />
            },
            {
                path: "/datenschutz",
                element: <Datenschutz />
            },
            {
                path: "/journey",
                element: <Journey />
            },
            {
                path: "/donate",
                element: <Donate />
            },
            {
                path: "/auss2024",
                element: <Ausstellung2024 />
            },
            {
                path: "/lwandle",
                element: <Lwandle />
            },
        ]
    }
])

export default router;