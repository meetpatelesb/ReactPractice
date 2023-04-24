import "./UserForm.css";
import React, { useState, useEffect } from "react";

export const UserForm = () => {
  
  // onsubmit callback
  const submitHandler = (e) => {
    e.preventDefault();
   setErrors( validateForm(values)); 
  //  setCheckErr(checkValidate(checkbox));
  };


  // const fnameHandler = (e) => {
  //   const fname = e.target.value;
  //   if (fname.length < 3) {
  //     setfnameErr(true);
  //   } else {
  //     setfnameErr(false);
  //   }
  //   setfname(fname);
  // };
  // const lnameHandler = (e) => {
  //   const lname = e.target.value;
  //   if (lname.length < 3) {
  //     setlnameErr(true);
  //   } else {
  //     setlnameErr(false);
  //   }
  //   setlname(lname);
  // };
  // const phoneHander = (e) => {
  //   const phone = e.target.value;
  //   if (phone.length >= 10 && phone.length < 11) {
  //     setphoneErr(false);
  //   } else {
  //     setphoneErr(true);
  //   }
  //   setphone(phone);
  // };
  // const emailHandler = (e) => {
  //   console.log(e.target.value);
  //   const email = e.target.value;
  //   const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  //   console.log(regex.test(email));
  //   if (regex.test(email)) {
  //     setemailErr(false);
  //   } else {
  //     setemailErr(true);
  //   }
  //   setemail(email);
  // };
  // const addressHandler = (e) => {
  //   const address = e.target.value;
  //   if (address.length < 25) {
  //     setaddressErr(true);
  //   } else {
  //     setaddressErr(false);
  //   }
  //   setaddress(address);
  // };
  // const [fname, setfname] = useState("");
  // const [lname, setlname] = useState("");
  // const [phone, setphone] = useState("");
  // const [email, setemail] = useState("");
  // const [address, setaddress] = useState("");
  // const [fnameErr, setfnameErr] = useState(false);
  // const [lnameErr, setlnameErr] = useState(false);
  // const [phoneErr, setphoneErr] = useState(false);
  // const [emailErr, setemailErr] = useState(false);
  // const [addressErr, setaddressErr] =useState(false);
 const value = {fname:"",lname:"",phone:"",email:"",address:"",dob:"",gender:"",Interests:[]};

  const [values ,setValues]=useState(value);
  const [errors,setErrors]=useState({});
  const [checkbox,setCheckbox] = useState([]);
  // const [checkErr,setCheckErr]= useState({});

  // onchange callback
const hasValidate = (e)=>{
const {name,value} = e.target;
const newvalues = {...values,[name]:value} ;
console.log(typeof newvalues)
setValues(newvalues);
}

const checkboxValidate=(e)=>{
    console.log(e.target)
  const {value,checked}=e.target;
  console.log(`${value} and ${checked}`)
  if(checked){  
setCheckbox([...checkbox,value])  
  }else{
    setCheckbox(checkbox.filter((e)=> e!== value))
  }

}


// validations with errors
const validateForm =(formvalue)=>{
const errors = {};
 const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
console.log(formvalue)


if(formvalue.fname ===  ""){
  errors.name = "Name is required!!"
}
if(formvalue.lname === ""){
    errors.name = "Name is required!!"
}
if(formvalue.phone.length !== 10 ){
  errors.phone = "Invalide Phone"
}
if(!emailPattern.test(formvalue.email)){
errors.email ="Invalide Email"
}
if(formvalue.address === ""){
  errors.address = "Address is required!!"
}
if(formvalue.dob.length === 0){
errors.dob = "Birth date is required!!"
}
if(formvalue.gender ===""){
  errors.gender = "Gender is required!!"
}
return errors;
}


  return (
    <>
      <h2 className="title"> User Form </h2>  
      <form onSubmit={submitHandler}>
        <table className="table">
          <tr>
            <td>
              <label className=""> FirstName: </label>  
            </td>  
            <td>
              <input type="text" className="" name="fname"  onChange={hasValidate}>
                  
              </input>  
            </td>  
            <td><p>{errors.name}</p></td>
            {/* <td> {fnameErr ? <span> * User Not Valid </span> : ""}</td> */}
          </tr>  
          <tr>
            <td>
              <label className=""> LastName : </label>  
            </td>  
            <td>
              <input type="text" className=""name="lname" onChange={hasValidate}>
                  
              </input>  
            </td> 
               <td><p>{errors.name}</p></td> 
           
          </tr>  
          <tr>
            <td>
              <label className=""> Phone : </label>  
            </td>  
            <td>
              <input type="text" className="" name="phone" onChange={hasValidate}>
                  
              </input>  
            </td>  
               <td><p>{errors.phone}</p></td>
          
          </tr>  
          <tr>
            <td>
              <label className=""> Email : </label>  
            </td>  
            <td>
              <input input type="email" className="" name="email" onChange={hasValidate}>
                  
              </input>  
            </td> 
               <td><p>{errors.email}</p></td> 
          
          </tr>  
          <tr>
            <td>
              <label className=""> Address : </label>  
            </td>  
            <td>
              <textarea
                type="textarea"
                cols="40"
                rows="5"
                className="" name="address" onChange={hasValidate}
              fixed></textarea>  
            </td>  
               <td><p>{errors.address}</p></td>
           
          </tr>  
          <tr>
            <td>
              <label className=""> D.O.B.: </label>  
            </td>  
            <td>
              <input type="date" name="dob" className="" onChange={hasValidate} min={'1992-01-01'} max={'2020-12-31'}>
                  
              </input>  
            </td>  
            <td><p>{errors.dob}</p></td>
          </tr>  
          <tr>
            <td>
              <label className=""> Gender: </label>  
            </td>  
            <td>
              <input type="radio" className="" name="gender" value="male" onChange={hasValidate} />
              Male <input type="radio" className="" name="gender" value="female"  onChange={hasValidate}/>
              Female <input type="radio" className="" name="gender" value="other" onChange={hasValidate}/>
              Other  
            </td>  
            <td><p>{errors.gender}</p></td>
          </tr>  
          <tr>
            <td>
              <label className=""> Interests: </label>  
            </td>  
            <td>
              Playing <input type="checkbox" className="" name="int" value="play" onChange={checkboxValidate} />
              Books Read <input type="checkbox" className="" name="int" value="read" onChange={checkboxValidate} />
              Dancing <input type="checkbox" className="" name="int" value="dance" onChange={checkboxValidate}/>
              Travelling <input type="checkbox" className="" name="int" value="travel" onChange={checkboxValidate}/>
            </td>  
          </tr>  
          <tr>
            <td> </td>  
          </tr>  
          <tr colSpan="2">
            <td className="">
              <button type="submit" className="btn">
                Submit  
              </button>  
            </td>  
          </tr>  
        </table>  
      </form>  
    </>
  );
};
