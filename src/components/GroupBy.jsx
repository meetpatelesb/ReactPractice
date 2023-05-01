// import React from "react";
// import { useState } from "react";
// import Pagination from "./Pagination";
// import Table from "./Table";

// const GroupBy = ({ groupby }) => {
//   console.log("ff");
//   console.log(groupby);
//   // pagination.........
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage, setPostPerPage] = useState(3);
//   const lastPostIndex = currentPage * postPerPage;
//   const firstPostIndex = lastPostIndex - postPerPage;

//   return (
//     <>
//       <div className="groupDetails">
//         {Object.keys(groupby).map((d, index) => {
//           if (d !== undefined) {
//             return (
//               <>
//                 <h2>{d}</h2>
//                   <Table  sortedData={groupby[d]}/>
//                 <table>
//                   {/* <thead>
//                     <th>Transaction Date</th>
//                     <th>Month Year</th>
//                     <th>Transaction Type</th>
//                     <th>From Account</th>
//                     <th>To Account</th>
//                     <th>Amount</th>
//                     <th>Receipt</th>
//                     <th>Notes</th>
//                     <th>Action</th>
//                   </thead> */}
//                   {/* {groupby[d]?.map((values) => (
//                     <>
//                       <tr>
//                         <td>{values.transactionDate.value}</td>
//                         <td>{values.monthYear.value}</td>
//                         <td>{values.transactionType.value}</td>
//                         <td>{values.fromAccount.value}</td>
//                         <td>{values.toAccount.value}</td>
//                         <td>
//                           {Intl.NumberFormat("en-IN", {
//                             style: "currency",
//                             currency: "INR",
//                           }).format(values.transactionAmount.value)}
//                         </td>
//                         <td>
//                           <img
//                             src={values.receipt.value}
//                             width={50}
//                             height={50}
//                             alt=""
//                           />
//                         </td>
//                         <td>{values.notes.value}</td>
//                         <td>
//                           <a href="#">View</a>
//                         </td>
//                       </tr>
//                     </>
//                   ))} */}
//                 </table>
               
//               </>
//             );
//           } else {
//             <></>;
//           }
//         })}
//       </div>
//     </>
//   );
// };

// export default GroupBy;
