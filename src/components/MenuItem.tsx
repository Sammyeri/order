import { useContext } from "react";
import { OrderContext } from "../context/OrderContexxt";
import  Item  from "../models/Item";


interface props{
    item:Item;
}
export default function MenuItem({item}:props) {
    const {addItem, removeItem, order} = useContext(OrderContext);
    const ordered = (id: string): boolean => {
        return order.some((item) => item.id === id);
    }
    return(
        <div>
            <ul>
                <li>Name: {item.name}</li>
                <p>Description: {item.description}</p>
                <p>Calories: {item.calories}</p>
                <p>Price: {item.price}</p>
                <p>{item.vegetarian ? <p>Vegetarian</p>: <p>Not Vegetarian</p>}</p>
                <button onClick={() => addItem(item)}>Add To Order</button>
                {ordered(item.id) && (
                    <button onClick={() => removeItem(item.id)}>Remove From Order</button>
                )}
            </ul>
        </div>
    )
}