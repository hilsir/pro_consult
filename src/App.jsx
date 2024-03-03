import {observer} from "mobx-react-lite";
import {useFetchData} from "./hooks/useFetchData";
import List from "./coponents/List";
import Item1 from "./coponents/Item1";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import {Context} from "./index";
import {v4 as uuidv4} from 'uuid'
import Sidebar from "./coponents/Sidebar";
import styled from "styled-components";

const App = observer(({className}) => {
    //mobx
    const {store} = useContext(Context)
    const list = useFetchData()

    // react-hook-form
    const {
        register,
        handleSubmit
    } = useForm()

    // данные из инпутов + сгенерированый id
    const onSubmit = (item) => {
        store.addItem({
            ...item,
            id: uuidv4(),
        })
    }

    return (
        //реакт фрагмент //не html это для react
        <>
            <div className={className}>
                {/*шаблон с документации hook-form*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="name" {...register('title')} />
                    <input type="submit"/>
                </form>
                <List listData={list} ItemComponent={Item1}/>
                <Sidebar/>
            </div>
        </>
    );
})

export default styled(App)`
  display: flex; 
  flexDirection: row;
`;
