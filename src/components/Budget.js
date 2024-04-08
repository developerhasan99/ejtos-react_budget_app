import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget, expenses, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {

        const inputValue = event.target.value;
        const regex = /^[0-9\b]+$/;

        if (inputValue === '' || regex.test(inputValue)) {

            const intValue = parseInt(inputValue);

            if(intValue > 20000) {
                alert('The budget cannot exceed £20,000');
                return;
            }

            if(intValue < totalExpenses) {
                alert('You cannot reduce the budget value lower than the spending');
                return;
            }

            setNewBudget(inputValue)
        }

    }

    return (
        <div className='alert alert-secondary d-flex gap-2 align-items-center mb-0'>
            <span>Budget: </span>
            <div className='input-group'>
                <span className='input-group-text'>{currency}</span>
                <input className="form-control" type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </div>
        </div>
    )

}

export default Budget;