import { Fragment } from "react";
import "./Transaction.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Transaction = () => {
  const retrivedata = JSON.parse(localStorage.getItem("transactionForm"));
  const [sortedField, setSortedField] = useState({});
  let sortedData = [...retrivedata];
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
  // console.log(retrivedata);
  // retrivedata.map((transaction) => {
  //             console.log(":::")
  //             Object.values(transaction).map((aa) => {
  //             console.log(aa.value);

  //             });
  //             console.log(transaction)

  //               console.log(":::");
  //           })

  // rupees format
  // let rupees = new Intl.NumberFormat("'en-IN'", {
  //   style: "currency",
  //   currency: "INR",
  // });

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
    setSortedField({ key, direction });
  };

  if (sortedField.direction === "normal") {
    sortedData = [...retrivedata];
  } else if (sortedField.key === "transactionAmount") {
    if (sortedField.direction === "ascending") {
      sortedData.sort((a, b) => {
        return a[sortedField?.key]?.value - b[sortedField?.key]?.value;
      });
    } else if (sortedField.direction === "descending") {
      sortedData.sort((a, b) => {
        return b[sortedField?.key]?.value - a[sortedField?.key]?.value;
      });
    }
  } else if (sortedField.key === "transactionDate") {
    if (sortedField.direction === "ascending") {
      sortedData.sort((a, b) => {
        return (
          new Date(a[sortedField?.key]?.value) -
          new Date(b[sortedField?.key]?.value)
        );
      });
    } else if (sortedField.direction === "descending") {
      sortedData.sort((a, b) => {
        return (
          new Date(b[sortedField?.key]?.value) -
          new Date(a[sortedField?.key]?.value)
        );
      });
    }
  } else if (sortedField.key === "monthYear") {
    if (sortedField.direction === "ascending") {
      console.log(months.indexOf("January 2023"));
      sortedData.sort((a, b) => {
        return (
          months.indexOf(a[sortedField.key]) -
          months.indexOf(b[sortedField.key])
        );
      });
    } else if (sortedField.direction === "descending") {
      sortedData.sort((a, b) => {
        return (
          months.indexOf(b[sortedField.key]) -
          months.indexOf(a[sortedField.key])
        );
      });
    }
  } else {
    sortedData.sort((a, b) => {
      // console.log(a[sortedField?.key].value < b[sortedField?.key].value);
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

  return (
    <>
      <div className="details">
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
            <th>Action</th>
          </thead>
          <tbody>
            {sortedData.map((transaction) => {
              return (
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
                    <a href="#">View</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <button className="createBtn">
          <Link to={"/"}>Create Transaction</Link>{" "}
        </button>
      </div>
    </>
  );
};
export default Transaction;
