import {Context} from "../../index";
import {useContext, useState} from "react";
import List from "../List";
import Item2 from "../Item2";

const Sidebar = () => {
    const {store} = useContext(Context)
    const [inputValue, setInputValue] = useState(null)

    return (
        <>
            <input onInput={(e) => {
                //e.target.value значение input
                setInputValue(e.target.value)
            }}/>
            <List
                listData={
                    inputValue ?
                        store.list.filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase())) : store.list
                }
            ItemComponent={Item2}
            />
        </>
    )
}

export default Sidebar;