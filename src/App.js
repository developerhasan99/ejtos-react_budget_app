import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AppProvider } from './context/AppContext';

//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='my-4'>Company's Budget Allocation</h1>
                <div className='row mb-4'>
                    <div className='col-md-3'>
                        <Budget />   
                    </div>
                    <div className='col-md-3'>
                        <Remaining />  
                    </div>
                    <div className='col-md-3'>
                        <ExpenseTotal />  
                    </div>
                    <div className='col-md-3'>
                        <Currency />  
                    </div>
                </div>

                <ExpenseList />  
                <AllocationForm />
            </div>
        </AppProvider>
    );
};
export default App;
