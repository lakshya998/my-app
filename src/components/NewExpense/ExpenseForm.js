import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const titleChangeHandler =(event) =>{
        console.log(event.target.value);
    };
    return (
        <form>
        <div className="new-expense__control">
            <div className="">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"></input>
            </div>
            <div className="v">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-02-21"></input>
            </div>
        </div>
        <div className="new-expense__control">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm;
