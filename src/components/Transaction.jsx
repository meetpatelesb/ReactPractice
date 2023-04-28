import { Fragment } from "react";
import "./Transaction.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination";

const Transaction = () => {
  const retrivedata = JSON.parse(localStorage.getItem("transactionForm"));
  const [sortedField, setSortedField] = useState({});
  const [groupby, setGroupby] = useState({});
  const [currentPage,setCurrentPage]=useState(1);
  const [postPerPage,setPostPerPage]=useState(5);
  const lastPost = currentPage*postPerPage;
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
          months.indexOf(a[sortedField?.key]?.value) -
          months.indexOf(b[sortedField?.key]?.value)
        );
      });
    } else if (sortedField.direction === "descending") {
      sortedData.sort((a, b) => {
        return (
          months.indexOf(b[sortedField?.key]?.value) -
          months.indexOf(a[sortedField?.key]?.value)
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
  // for group by
  const groupBy = (e) => {
    let field = e.target.value;
    const gData = [...retrivedata];
    // console.log(field)
    // console.log(gData)
    let groupData = {};
    if (field === "none") {
      setGroupby(groupData);
    } else {
      gData.forEach((items) => {
        // console.log(items)
        const item = items[field]?.value;
        // console.log(item,'col')
        // console.log(items?.transactionAmount?.value)

        groupData[item] = groupData[item] ?? [];
        groupData[item].push(items);
        // console.log(groupData[item]);
        // console.log("dataaaaaaaaa");
        // console.log(groupData);
        setGroupby(groupData);
      });
    }
    // console.log("getdata");
    // console.log(groupData)
    // console.log("setdata");
  };
  console.log(groupby);

  return (
    <>
      <div className="details">
        <>
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
        </>
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
            {sortedData.map((transaction) => (
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
            ))}
          </tbody>
        </table>

        <button className="createBtn">
          <Link to={"/"}>Create Transaction</Link>{" "}
        </button>

        <div className="groupDetails">
          {Object.keys(groupby).map((d, index) => {
            if (d !== undefined) {
              return (
                <>
                  <h2>{d}</h2>
                  <table>
                    <thead>
                      <th>Transaction Date</th>
                      <th>Month Year</th>
                      <th>Transaction Type</th>
                      <th>From Account</th>
                      <th>To Account</th>
                      <th>Amount</th>
                      <th>Receipt</th>
                      <th>Notes</th>
                      <th>Action</th>
                    </thead>

                    {groupby[d].map((values) => (
                      <>
                        <tr>
                          <td>{values.transactionDate.value}</td>
                          <td>{values.monthYear.value}</td>
                          <td>{values.transactionType.value}</td>
                          <td>{values.fromAccount.value}</td>
                          <td>{values.toAccount.value}</td>
                          <td>
                            {Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(values.transactionAmount.value)}
                          </td>
                          <td>
                            <img
                              src={values.receipt.value}
                              width={50}
                              height={50}
                              alt=""
                            />
                          </td>
                          <td>{values.notes.value}</td>
                          <td>
                            <a href="#">View</a>
                          </td>
                        </tr>
                      </>
                    ))}
                  </table>
                </>
              );
            } else {
              <></>;
            }
          })}
        </div>
      </div>
    </>
  );
};
export default Transaction;
