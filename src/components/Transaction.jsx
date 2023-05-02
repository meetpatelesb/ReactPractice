
import "./Transaction.css";
import { Link,useLocation } from "react-router-dom";
import { useState} from "react";
import Table from "./Table";


const Transaction = () => {
  const retrivedata = JSON.parse(localStorage.getItem("transactionForm"));
  const [groupby, setGroupby] = useState({});
  // const [sortedField, setSortedField] = useState({});
  // let [sortedData,setSortedData]=useState(retrivedata)

  // // pagination.........
  // const [currentPage,setCurrentPage]=useState(1);
  // const [postPerPage,setPostPerPage]=useState(3);
  // const lastPostIndex = currentPage*postPerPage;
  // const firstPostIndex = lastPostIndex - postPerPage;
  // const paginationData = sortedData.slice(firstPostIndex,lastPostIndex)
  // setSortedData(paginationData)

  // const months = [
  //   "January 2023",
  //   "February 2023",
  //   "March 2023",
  //   "April 2023",
  //   "May 2023",
  //   "June 2023",
  //   "July 2023",
  //   "August 2023",
  //   "September 2023",
  //   "October 2023",
  //   "November 2023",
  //   "December 2023",
  // ];

  // const sorting = (key) => {
  //   let direction = "ascending";

  //   if (sortedField.key === key && sortedField.direction === "ascending") {
  //     direction = "descending";
  //   } else if (
  //     sortedField.key === key &&
  //     sortedField.direction === "descending"
  //   ) {
  //     direction = "normal";
  //   }
  //   setSortedField({ key, direction });
  // };

  // if (sortedField.direction === "normal") {
  //   sortedData = [...retrivedata];

  // } else if (sortedField.key === "transactionAmount") {
  //   if (sortedField.direction === "ascending") {
  //     sortedData.sort((a, b) => {
  //       return a[sortedField?.key]?.value - b[sortedField?.key]?.value;
  //     });
  //   } else if (sortedField.direction === "descending") {
  //     sortedData.sort((a, b) => {
  //       return b[sortedField?.key]?.value - a[sortedField?.key]?.value;
  //     });
  //   }
  // } else if (sortedField.key === "transactionDate") {
  //   if (sortedField.direction === "ascending") {
  //     sortedData.sort((a, b) => {
  //       return (
  //         new Date(a[sortedField?.key]?.value) -
  //         new Date(b[sortedField?.key]?.value)
  //       );
  //     });
  //   } else if (sortedField.direction === "descending") {
  //     sortedData.sort((a, b) => {
  //       return (
  //         new Date(b[sortedField?.key]?.value) -
  //         new Date(a[sortedField?.key]?.value)
  //       );
  //     });
  //   }
  // } else if (sortedField.key === "monthYear") {
  //   if (sortedField.direction === "ascending") {
  //     console.log(months.indexOf("January 2023"));
  //     sortedData.sort((a, b) => {
  //       return (
  //         months.indexOf(a[sortedField?.key]?.value) -
  //         months.indexOf(b[sortedField?.key]?.value)
  //       );
  //     });
  //   } else if (sortedField.direction === "descending") {
  //     sortedData.sort((a, b) => {
  //       return (
  //         months.indexOf(b[sortedField?.key]?.value) -
  //         months.indexOf(a[sortedField?.key]?.value)
  //       );
  //     });
  //   }
  // } else {
  //   sortedData.sort((a, b) => {
  //     // console.log(a[sortedField?.key].value < b[sortedField?.key].value);
  //     if (
  //       a[sortedField?.key]?.value?.toLowerCase() <
  //       b[sortedField?.key]?.value?.toLowerCase()
  //     ) {
  //       return sortedField.direction === "ascending" ? -1 : 1;
  //     }

  //     if (
  //       a[sortedField?.key]?.value?.toLowerCase() >
  //       b[sortedField?.key]?.value?.toLowerCase()
  //     ) {
  //       return sortedField.direction === "ascending" ? 1 : -1;
  //     }
  //     return 0;
  //   });
  // }
  // for group by
  const groupBy = (e) => {
    let field = e.target.value;
    console.log("filed", field);

    const gData = [...retrivedata];

    let groupData = {};
    if (field === "none") {
      setGroupby(groupData);
    } else {
      gData.forEach((items) => {
        console.log("value");
        console.log(items[field]?.value);
        const item = items[field]?.value;
        groupData[item] = groupData[item] ?? [];
        groupData[item].push(items);

        setGroupby(groupData);
      });
    }
  };
  

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

        <Table records={retrivedata} />

        <button className="createBtn">
          <Link to={"/"}>Create Transaction</Link>{" "}
        </button>

        <div className="groupDetails">
          {Object.keys(groupby).map((d, index) => {
         
            if (d !== undefined) {
              return (
                <>
                  <h2>{d}</h2>
                  <Table records={groupby[d]} />
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
