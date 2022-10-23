import { useContext } from "react";
import { OrderContext } from "../context/OrderContexxt";


export function Sidebar() {
    const {order} = useContext(OrderContext);
    let total = 0;
    order.forEach((item) => {
        total = item.price + total
    });

    return(
        <div>
            <p>total: ${total}</p>
        </div>
    )
}