import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleChange = (event) => {

        console.log(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }


    return (
        <div className='alert alert-secondary d-flex gap-2 align-items-center mb-0'>
            <span>Currency: </span>
            <select className="custom-select form-select" style={{backgroundColor: '#93e499'}} id="inputGroupSelect02" onChange={handleChange}>
                <option defaultValue value="$" name="dollar">$ Dollar</option>
                <option defaultValue value="£" name="pound">£ Pound</option>
                <option defaultValue value="€" name="euro">€ Euro</option>
                <option defaultValue value="₹" name="rupee">₹ Rupee</option>
            </select>
        </div>
    )

}

export default Currency;