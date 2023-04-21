import UserDatas from "./UserDatas";
import React, { useEffect, useState } from "react";


const User = (element)=>{
const [users, setUser] = useState([]);
  // run on page load
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json();
    setUser(users)
    console.log(users)
    
  };
  return (
    <div>
      <UserDatas userdata={users} />
    </div>
  );}

  export default User;