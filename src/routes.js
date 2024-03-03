import App from "./App";
import {createBrowserRouter} from "react-router-dom";
import Item from "./Pages/Item";
import NotFound from "./Pages/NotFound";


export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App/>,
        },
        {
            path: 'items/:itemId',
            element: <Item/>,
        },
        {
            path: '*',
            element: <NotFound/>,
        }
    ]
)