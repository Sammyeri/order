import { ReactNode, useState } from "react";
import { OrderContext } from "./OrderContexxt";
import  Item  from "../models/Item";

interface Props{
    children: ReactNode;
}

export const OrderContextProvider = ({children}: Props) => {
    const [order, setOrder] = useState<Item[]>([]);

    function addItem(newItem: Item) {
        const temporders = order.slice(0);
        temporders.push(newItem);
        setOrder(temporders);
    }

    function removeItem(id: string){
        const index = order.findIndex((item) => 
            item.id === id);
        
        setOrder(prevOrder => [...prevOrder.slice(0, index), ...prevOrder.slice(index + 1)]);
    }

    return(
        <OrderContext.Provider value={{order, addItem, removeItem}}>{children}</OrderContext.Provider>
    )
}