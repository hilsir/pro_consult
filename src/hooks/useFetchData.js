import {useContext, useEffect} from "react";
import {Context} from "../index";
import axios from "axios";

export const useFetchData = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums?_limit=10')
            .then((res) => {
                store.setList(res.data);
            })
            .catch(() => {
                console.log("error");
            })
    }, [])

    return store.list
}