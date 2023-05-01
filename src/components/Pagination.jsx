// import "./Pagination.css";
// import React from "react";

// const Pagination = ({
//   totalPosts,
//   postsPerPage,
//   setCurrentPage,
//   currentPage,
//   lastPostIndex,
//   firstPostIndex,
// }) => {
//   let pages = [];
//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pages.push(i);
//   }
//   let nThPage = pages.length;
//   return (
//     <>
//       <div className="pagination">
//         <button
//           className="page"
//           onClick={() => {
//             if (currentPage !== 1) {
//               setCurrentPage(currentPage - 1);
//             }
//           }}
//         >
//           Prev
//         </button>

//         {pages.map((page, index) => {
//           return (
//             <button
//               key={index}
//               className={page == currentPage ? "active" : "page"}
//               onClick={() => {
//                 setCurrentPage(page);
//               }}
//             >
//               {page}
//             </button>
//           );
//         })}

//         <button
//           className="page"
//           onClick={() => {
//             if(currentPage !== nThPage){
//               setCurrentPage(currentPage + 1)
//             } }}
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default Pagination;
