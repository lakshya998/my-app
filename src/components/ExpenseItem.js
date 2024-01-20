import './ExpenseItem.css';  


function ExpenseItem(){
    const expenseDate = new Date(2024,0,20);
    const expenseTitle = 'Insurance';
    const expenseAmount = 300;

   return (
    <div className='expense-item' >
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2></div>
        <div className='expense-item__price'>${expenseAmount}</div>
    </div>
   );
}


export default ExpenseItem;