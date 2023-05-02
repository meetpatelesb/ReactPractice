import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const months = [
  "January 2023",
  "February 2023",
  "March 2023",
  "April 2023",
  "May 2023",
  "June 2023",
  "July 2023",
  "August 2023",
  "September 2023",
  "October 2023",
  "November 2023",
  "December 2023",
];

const Table = (props) => {
  let records = props.records;
 
  let [sortedData, setSortedData] = useState(records);
  const [sortedField, setSortedField] = useState({});
  const [count,setCount]=useState(0);


  const sorting = (key) => {
    let direction = "ascending";
   

    if (sortedField.key === key && sortedField.direction === "ascending") {
      direction = "descending";
    } else if (
      sortedField.key === key &&
      sortedField.direction === "descending"
    ) {
      direction = "normal";
    }
    console.log(key, "keyyy2", direction);
    setSortedField({ key, direction });

  };

  useEffect(() => {
    if (sortedField.direction === "normal") {
      setSortedData(records);
    } else if (sortedField.key === "transactionAmount") {
      let newData = sortedData;
      if (sortedField.direction === "ascending") {
        newData.sort((a, b) => {
          return a[sortedField?.key]?.value - b[sortedField?.key]?.value;
        });
      } else if (sortedField.direction === "descending") {
        newData.sort((a, b) => {
          return b[sortedField?.key]?.value - a[sortedField?.key]?.value;
        });
      }
      setSortedData(newData);
    } else if (sortedField.key === "transactionDate") {
      let newData = sortedData;
      if (sortedField.direction === "ascending") {
        newData.sort((a, b) => {
          return (
            new Date(a[sortedField?.key]?.value) -
            new Date(b[sortedField?.key]?.value)
          );
        });
        
      } else if (sortedField.direction === "descending") {
        let newData = sortedData;
        newData.sort((a, b) => {
          return (
            new Date(b[sortedField?.key]?.value) -
            new Date(a[sortedField?.key]?.value)
          );
        });
      }
      setSortedData(newData);
    } else if (sortedField.key === "monthYear") {
      let newData = sortedData;
      if (sortedField.direction === "ascending") {
       
        newData.sort((a, b) => {
          return (
            months.indexOf(a[sortedField?.key]?.value) -
            months.indexOf(b[sortedField?.key]?.value)
          );
        });
      
      } else if (sortedField.direction === "descending") {
        let newData = sortedData;
        newData.sort((a, b) => {
          return (
            months.indexOf(b[sortedField?.key]?.value) -
            months.indexOf(a[sortedField?.key]?.value)
          );
        });
      }
      setSortedData(newData);
    } else {
      let newData = sortedData;

      newData.sort((a, b) => {
    
        if (
          a[sortedField?.key]?.value?.toLowerCase() <
          b[sortedField?.key]?.value?.toLowerCase()
        ) {
          return sortedField.direction === "ascending" ? -1 : 1;
        }

        if (
          a[sortedField?.key]?.value?.toLowerCase() >
          b[sortedField?.key]?.value?.toLowerCase()
        ) {
          return sortedField.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
  }, [sortedField]);

  // pagination.........
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const paginationData = records.slice(firstPostIndex, lastPostIndex);
  

  let totalPosts = records.length;
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  let nThPage = pages.length;

  return (
    <>
      <table>
        <thead>
          <th
            onClick={() => {
              sorting("transactionDate");
            }}
          >
            Transaction Date
          </th>
          <th
            onClick={() => {
              sorting("monthYear");
            }}
          >
            Month Year
          </th>
          <th
            onClick={() => {
              sorting("transactionType");
            }}
          >
            Transaction Type
          </th>
          <th
            onClick={() => {
              sorting("fromAccount");
            }}
          >
            From Account
          </th>
          <th
            onClick={() => {
              sorting("toAccount");
            }}
          >
            To Account
          </th>
          <th
            onClick={() => {
              sorting("transactionAmount");
            }}
          >
            Amount
          </th>
          <th>Receipt</th>
          <th
            onClick={() => {
              sorting("notes");
            }}
          >
            Notes
          </th>
          <th>Edit</th>
          <th>Action</th>
        </thead>
        <tbody>
          {paginationData.map((transaction, count) => (
            <tr>
              <td>{transaction.transactionDate.value}</td>
              <td>{transaction.monthYear.value}</td>
              <td>{transaction.transactionType.value}</td>
              <td>{transaction.fromAccount.value}</td>
              <td>{transaction.toAccount.value}</td>
              <td>
                {Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(transaction.transactionAmount.value)}
              </td>
              <td>
                <img
                  src={transaction.receipt.value}
                  width={50}
                  height={50}
                  alt=""
                />
              </td>
              <td>{transaction.notes.value}</td>
              <td>
                <Link to={`/create/${transaction.id}`}>Edit</Link>
              </td>
              <td>
                <Link to={`/transaction/${transaction.id}`} className="btn-text">
                  View
                </Link>
              </td>
            </tr> 
          ))
          }
        </tbody>
      </table>
      <div className="pagination">
        <button
          className="page"
          onClick={() => {
            if (currentPage !== 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          Prev
        </button>

        {pages.map((page, index) => {
          return (
            <button
              key={index}
              className={page === currentPage ? "active" : "page"}
              onClick={() => {
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          );
        })}

        <button
          className="page"
          onClick={() => {
            if (currentPage !== nThPage) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Table;
