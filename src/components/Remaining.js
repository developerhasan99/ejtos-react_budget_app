import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);
    const totlaExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0);

    const alertType = totlaExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget - totlaExpenses}</span>
        </div>
    );
}

export default Remaining;