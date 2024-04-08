import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining,currency  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    const handleCostChange = (event) => {

        const inputValue = event.target.value;
        const regex = /^[0-9\b]+$/;

        if (inputValue === '' || regex.test(inputValue)) {
            setCost(inputValue);
        }
    }


    return (
        <div className='mb-5 d-flex gap-3 justify-content-start'>
            <div className='input-group' style={{maxWidth: 250}}>
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                <select className="custom-select form-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                  </select>
            </div>

            <div className='input-group' style={{maxWidth: 250}}>
                <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                <select className="custom-select form-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                    <option defaultValue value="Add" name="Add">Add</option>
                    <option value="Reduce" name="Reduce">Reduce</option>
                </select>
            </div>

            <div className='input-group' style={{maxWidth: 250}}>
                <label className="input-group-text" htmlFor="cost">{currency}</label>
                <input
                    className='form-control'
                    required='required'
                    type='text'
                    id='cost'
                    value={cost}
                    onChange={handleCostChange}
                />
            </div>

            <button className="btn btn-primary" onClick={submitEvent}>
                Save
            </button>

        </div>
    );
};

export default AllocationForm;