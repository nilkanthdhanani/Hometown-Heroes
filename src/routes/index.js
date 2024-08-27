import { createBrowserRouter } from "react-router-dom";
import Home from "../modules/home";
import DefaultLayout from "./defaultLayout";
import Error from "../error";
import Ausstellung2023 from "../modules/ausstellung2023";

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
        ]
    },

    {
        path: "*",
        element: <Error />
    }
]
)

export default router;