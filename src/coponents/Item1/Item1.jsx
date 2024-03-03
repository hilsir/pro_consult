import {Context} from "../../index";
import {useContext} from "react";
import {Link} from "react-router-dom";

const Item1 = ({item}) => {
    const {store} = useContext(Context)
    return (
        <div>
            additional_data_(

            <Link to={"items/" + item.id}>{item.title}</Link>
            )
            <button onClick={() => store.removeItem(item.id)}> delete</button>
        </div>
    )
}

export default Item1