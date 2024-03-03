import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Store from "./store/store";
import {RouterProvider} from "react-router";
import {router} from './routes'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider
            value={
                {
                    store: new Store(),
                }
            }
        >
            <RouterProvider router={router}/>
            {/*<App/>*/}
        </Context.Provider>
    </React.StrictMode>
);

