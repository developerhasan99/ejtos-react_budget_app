import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {

        setNewBudget(event.target.value)
    }


    return (
        <div className='alert alert-secondary d-flex gap-2 align-items-center mb-0'>
            <span>Budget: </span>
            <div className='input-group'>
                <span className='input-group-text'>£</span>
                <input className="form-control" type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </div>
        </div>
    )

}

export default Budget;