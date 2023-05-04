import React from 'react'

export  const Dropdown = (props) => {
  console.log(props);
  return (
    <>
        {props.for.map((field) => (
          <>
            <option value={field}>{field}</option>
          </>
        ))}
  

      {/* 
     <label>Group By:</label>
          <select
            className="groupby"
            onChange={(e) => {
              groupBy(e);
            }}
          >
            
            <option value="none">None</option>
            <option value="monthYear">Month Year</option>
            <option value="transactionType">Transaction Type</option>
            <option value="fromAccount">From Account</option>
            <option value="toAccount">To Account</option>
          </select>
           */}
    </>
  );
}
