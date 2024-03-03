import {makeAutoObservable} from "mobx";

export default class Store {

    constructor() {
        this.list = [];
        makeAutoObservable(this)
    }

    setList = (newList) => {
        this.list = newList
    }

    addItem = (item) => {
        console.log(item + "!!!")
        this.list = [...this.list,item]
    }
    removeItem = (id) => {
        console.log(id + "!!!")
        this.list = this.list.filter((item) => item.id !== id)
    }

}



