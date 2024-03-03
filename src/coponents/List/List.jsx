const List = ({ItemComponent, listData}) => {
    return (
        <div>
            {listData.map((item) => {
                return <ItemComponent item={item} key={item.id}/>
            })}
        </div>
    )
}

export default List;