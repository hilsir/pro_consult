import {useContext} from "react";
import {Context} from "../../index";
import {Link} from "react-router-dom";

const Item2 = ({item}) => {
    const {store} = useContext(Context)
    return (
        <div>
            <Link to={"items/" + item.id}>{item.title}</Link>
            <button onClick={() => store.removeItem(item.id)}> delete</button>
        </div>
    )
}

export default Item2