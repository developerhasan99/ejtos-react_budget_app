import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const {expenses, budget, currency} = useContext(AppContext);
    const totlaExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0);

    const alertType = totlaExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType} mb-0 d-flex align-items-center`} style={{height: '100%'}}>
            <span>Remaining: {currency}{budget - totlaExpenses}</span>
        </div>
    );
}

export default Remaining;