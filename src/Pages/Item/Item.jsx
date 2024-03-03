import {useContext, useMemo} from "react";
import {Context} from "../../index";
import {Navigate, useParams} from "react-router-dom";
import Item1 from "../../coponents/Item1";

const Item = () => {
    const {store} = useContext(Context)
    //useParams вытаскивает значения из url
    const {itemId} = useParams()
    //useMemo тоже сомое что и useEfect но возвращает значение
    const item = useMemo(()=> {
        return store.list.find((item) => item.id == itemId)
        },[store.list, itemId]
    )

    if(!item){
        return <Navigate to="/"/>
    }

    return (
        <>
        <Item1 item={item}/>
        </>
    )
}

export default Item