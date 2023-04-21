import "./UserDatas.css";
import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

const UserDatas = (props) => {
  return (
    <>
    <span className="title">User Datas</span>
  <table className="table">
     <tr className="tr">
        <th className="td">Id</th>
        <th className="td">Name</th>
        <th className="td">Email</th>
        <th className="td">Phone</th>
        <th className="td">Address</th>
        <th className="td">Views</th>
    </tr>
 

      {props.userdata.map((user,index) => {
        return (
          <Fragment key={index}>
         
            <tr className="tr">
              <td className="td">{user.id}</td>
              <td className="td">{user.name}</td>
              <td className="td">{user.email}</td>
              <td className="td">{user.phone}</td>
              <td className="td">
                {user.address.street},{user.address.suite},{user.address.city},
                {user.address.zipcode}
              </td>
              <td><Link to={'/user-post'} state={user.id} >Views</Link> 
             </td>
            </tr>
          </Fragment>
        );  
      } 
       )}
        </table>
    </>
  );
};

export default UserDatas;

     