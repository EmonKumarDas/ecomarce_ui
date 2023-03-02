import { createBrowserRouter } from "react-router-dom";
import Index from "../Files/Home/Index/Index";
import LayOut from "../LayOut/LayOut";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayOut></LayOut>,
        children: [
            {
                path: "/",
                element: <Index></Index>
            }
        ]
    },
]);

export default router;