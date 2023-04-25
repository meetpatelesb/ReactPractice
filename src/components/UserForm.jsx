import "./UserForm.css";
import React, { useState, useEffect } from "react";

export const UserForm = () => {
  
  // onsubmit callback
  const submitHandler = (e) => {
    e.preventDefault();
   setErrors( validateForm(values)); 
  //  setCheckErr(checkValidate(checkbox));
  };

//   const onFormvalue = {fname:{
//     value:"",
//     error:""
//   },
//   lname:{
//     value:"",
//     error:""
//   },
//   phone:{
//     value:"",
//     error:""
//   },
//   email:{
//     value:"",
//     error:""
//   },
//   dob:{
//     value:"",
//     error:""
//   }
// }
// const [FormValue ,setFormValues]=useState(onFormvalue);
 
// const fnameHandler = (e) => {
//   const {name,value} = e.target;
//     // const fname = e.target.value;
//     // setFormValues((perv))
//     setFormValues((prev)=>({
//       ...prev,
//         fname :{
//           ...prev.fname,
//           value : value
//         } 
//     }))
//     // if (fname.length < 3) {
//       //   setfnameErr(true);
//       // } else {
//         //   setfnameErr(false);
//         // }  
//         // setfname(fname);
//       };

//   const lnameHandler = (e) => {
//     // const lname = e.target.value;
//     // if (lname.length < 3) {
//     //   setlnameErr(true);
//     // } else {
//     //   setlnameErr(false);
//     // }
//     // setlname(lname);
//   };
//   const phoneHander = (e) => {
//     // const phone = e.target.value;
//     // if (phone.length >= 10 && phone.length < 11) {
//     //   setphoneErr(false);
//     // } else {
//     //   setphoneErr(true);
//     // }
//     // setphone(phone);
//   };
//   const emailHandler = (e) => {
//     // console.log(e.target.value);
//     // const email = e.target.value;
//     // const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
//     // console.log(regex.test(email));
//     // if (regex.test(email)) {
//     //   setemailErr(false);
//     // } else {
//     //   setemailErr(true);
//     // }
//     // setemail(email);
//   };
//   const addressHandler = (e) => {
//     // const address = e.target.value;
//     // if (address.length < 25) {
//     //   setaddressErr(true);
//     // } else {
//     //   setaddressErr(false);
//     // }
//     // setaddress(address);
//   };
//   const dobHander = (e)=>{
//     // const dob = e.target.value;
//     // if(dob.length ===0 ){

//     // }
//   }
 
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

 const value = {fname:"",lname:"",phone:"",email:"",address:"",dob:"",gender:"",Interests:[],inputdata:[{title:'',date:''}]};

  const [values ,setValues]=useState(value);
  const [errors,setErrors]=useState({});
  const [checkbox,setCheckbox] = useState([]);
  const [addval,setaddval]=useState([{title:'',date:''}]);
  // const [checkErr,setCheckErr]= useState({});

  // onchange callback
const hasValidate = (e)=>{
  

const {name,value} = e.target;
const newvalues = {...values,[name]:value} ;
console.log(newvalues);
setValues(newvalues);

validateForm(values)


}
// console.log("typeof "+ typeof checkbox)

// checkbox purpuse
const checkboxValidate=(e)=>{
  const {value,checked}=e.target;  
  // console.log(`${value} and ${checked}`)
  if(checked){  
  checkbox.push(value) 
// console.log(checkbox)
  }else{
    const index =  checkbox.indexOf(value);
    checkbox.splice(index,1)
    // console.log(checkbox)
  }
setCheckbox(checkbox)
const checkValue = {...values,Interests:checkbox} 
setValues(checkValue)
}

// add remove  fields

const handleadd  = () =>{
  // const addvalues = [...addval,{title:'',date:''}];
  setaddval([...addval,{title:'',date:''}])
}

const handleChange=(inputvalue ,i) =>{
  const name=inputvalue.target.name;
  const value=inputvalue.target.value;
  const inputdata  = [...addval] 
  inputdata[i][name]= value;
 setaddval(inputdata)
    const newvalues = {...values,inputdata}
  setValues(newvalues)
}


const handleRemove =(e,i)=>{
const deletedata = [...addval]
deletedata.splice(i,1);
setaddval(deletedata)
 const newvalues = {...values,inputdata:deletedata}
  setValues(newvalues)
}

// validations with errors
const validateForm =(formvalue)=>{
const errors = {};
 const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
// console.log(typeof(formvalue.inputdata))  
// console.log(formvalue.inputdata.length)

if((formvalue.fname.trim()).length ===  0){
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
if((formvalue.address.trim()).length === 0){
  errors.address = "Address is required!!"
}
if(formvalue.dob.length === 0){
  errors.dob = "Birth date is required!!"
}
if(formvalue.gender ===""){
  errors.gender = "Gender is required!!"
}
if(formvalue.inputdata.length ===1 ){
  errors.inputdata = "One Achievement is required"
}

for(let i = 0 ;i<formvalue.inputdata.length;i++){
  // console.log(formvalue.inputdata[i]['date'])
  if((formvalue.inputdata[i]['title'].trim()).length === 0){
errors.title = "Title is required!!"
  }else if((formvalue.inputdata[i]['date'].trim()).length === 0){
errors.date = "Date is required!!"
  }
}

if(formvalue.Interests.length === 0){
  errors.Interests = "One Interest is Required!!"
}
console.log(values)
return errors;
}
      // console.log("formValues",FormValue)

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
              <input input type="text" className="" name="email" onChange={hasValidate}>
                  
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
              <input type="radio" className="" name="gender" id="male" value="male" onChange={hasValidate} />
             <label for="male">Male</label>  <input type="radio"  id="female" className="" name="gender" value="female"  onChange={hasValidate}/>
              <label for="female">Female</label> <input type="radio" className="" id="other" name="gender" value="other" onChange={hasValidate}/>
             <label for="other">Other</label>   
            </td>  
            <td><p>{errors.gender}</p></td>
          </tr>  
          <tr>
            <td>
              <label className=""> Interests: </label>  
            </td>  
            <td>
              <label for="play">Playing</label> <input type="checkbox" className=""  id="play"name="int" value="play" onChange={checkboxValidate} />
              <label for="read">Books Read</label>  <input type="checkbox" className="" id="read" name="int" value="read" onChange={checkboxValidate} />
              <label for="dance">Dancing</label> <input type="checkbox" className="" id="dance" name="int" value="dance" onChange={checkboxValidate}/>
              <label for="travel">Travelling</label> <input type="checkbox" className="" id="travel" name="int" value="travel" onChange={checkboxValidate}/>
            </td>
            <td><p>{errors.Interests}</p></td>  
          </tr>  
         
          
        
          <tr>
            <td><label className="">Certificate</label> </td>  
          </tr>  
        

{
      (addval.map((data,i)=>{
       return (
        <>
        <tr>
        <td></td>
        <td><input type="text" name="title"  className="certificate"  onChange={(e)=>{
          handleChange(e,i)
        }} >
        </input></td>
        <td><input type="date" name="date"  className="" min={'1992-01-01'} max={'2020-12-31'} onChange={(e)=>{
          handleChange(e,i)
        }}>
             </input></td>
              <td><button type="button" onClick={()=>{
              handleadd()
           }}>+</button></td>


{
            i  ? <td><button type="button" onClick={(e)=>{
              handleRemove(e,i)
             }}>x</button></td> :null}
        </tr>
      </>
       )
      }))
      
}
{/* <tr><td></td><td>{JSON.stringify(addval)}</td></tr> */}
           <tr><td></td><td><p>{errors.inputdata}</p></td></tr>
            <tr><td></td><td><p>{errors.title}</p></td></tr>
             <tr><td></td><td><p>{errors.date}</p></td></tr>
          
          <tr colSpan="2">
            <td className="">
              <button type="submit" >
                Submit  
              </button>  
            </td>  
          </tr>  
          

        </table>  
      </form>  
    </>
          

  );

// // validations with errors
// const validateForm =(formvalue)=>{
// const errors = {};
//  const emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
// // console.log(typeof(formvalue.inputdata))  
// // console.log(formvalue.inputdata.length)

// if((formvalue.fname.trim()).length ===  0){
//   errors.name = "Name is required!!"
// }
// if(formvalue.lname === ""){
//     errors.name = "Name is required!!"
// }
// if(formvalue.phone.length !== 10 ){
//   errors.phone = "Invalide Phone"
// }
// if(!emailPattern.test(formvalue.email)){
// errors.email ="Invalide Email"
// }
// if((formvalue.address.trim()).length === 0){
//   errors.address = "Address is required!!"
// }
// if(formvalue.dob.length === 0){
//   errors.dob = "Birth date is required!!"
// }
// if(formvalue.gender ===""){
//   errors.gender = "Gender is required!!"
// }
// if(formvalue.inputdata.length ===1 ){
//   errors.inputdata = "One Achievement is required"
// }

// for(let i = 0 ;i<formvalue.inputdata.length;i++){
//   // console.log(formvalue.inputdata[i]['date'])
//   if((formvalue.inputdata[i]['title'].trim()).length === 0){
// errors.title = "Title is required!!"
//   }else if((formvalue.inputdata[i]['date'].trim()).length === 0){
// errors.date = "Date is required!!"
//   }
// }

// if(formvalue.Interests.length === 0){
//   errors.Interests = "One Interest is Required!!"
// }
// console.log(values)
// return errors;
// }


//   return (
//     <>
//       <h2 className="title"> User Form </h2>  
//       <form onSubmit={submitHandler}>
//         <table className="table">
//           <tr>
//             <td>
//               <label className=""> FirstName: </label>  
//             </td>  
//             <td>
//               <input type="text" className="" name="fname"  onChange={hasValidate}>
                  
//               </input>  
//             </td>  
//             <td><p>{errors.name}</p></td>
//             {/* <td> {fnameErr ? <span> * User Not Valid </span> : ""}</td> */}
//           </tr>  
//           <tr>
//             <td>
//               <label className=""> LastName : </label>  
//             </td>  
//             <td>
//               <input type="text" className=""name="lname" onChange={hasValidate}>
                  
//               </input>  
//             </td> 
//                <td><p>{errors.name}</p></td> 
           
//           </tr>  
//           <tr>
//             <td>
//               <label className=""> Phone : </label>  
//             </td>  
//             <td>
//               <input type="text" className="" name="phone" onChange={hasValidate}>
                  
//               </input>  
//             </td>  
//                <td><p>{errors.phone}</p></td>
          
//           </tr>  
//           <tr>
//             <td>
//               <label className=""> Email : </label>  
//             </td>  
//             <td>
//               <input input type="text" className="" name="email" onChange={hasValidate}>
                  
//               </input>  
//             </td> 
//                <td><p>{errors.email}</p></td> 
          
//           </tr>  
//           <tr>
//             <td>
//               <label className=""> Address : </label>  
//             </td>  
//             <td>
//               <textarea
//                 type="textarea"
//                 cols="40"
//                 rows="5"
//                 className="" name="address" onChange={hasValidate}
//               fixed></textarea>  
//             </td>  
//                <td><p>{errors.address}</p></td>
           
//           </tr>  
//           <tr>
//             <td>
//               <label className=""> D.O.B.: </label>  
//             </td>  
//             <td>
//               <input type="date" name="dob" className="" onChange={hasValidate} min={'1992-01-01'} max={'2020-12-31'}>
                  
//               </input>  
//             </td>  
//             <td><p>{errors.dob}</p></td>
//           </tr>  
//           <tr>
//             <td>
//               <label className=""> Gender: </label>  
//             </td>  
//             <td>
//               <input type="radio" className="" name="gender" id="male" value="male" onChange={hasValidate} />
//              <label for="male">Male</label>  <input type="radio"  id="female" className="" name="gender" value="female"  onChange={hasValidate}/>
//               <label for="female">Female</label> <input type="radio" className="" id="other" name="gender" value="other" onChange={hasValidate}/>
//              <label for="other">Other</label>   
//             </td>  
//             <td><p>{errors.gender}</p></td>
//           </tr>  
//           <tr>
//             <td>
//               <label className=""> Interests: </label>  
//             </td>  
//             <td>
//               <label for="play">Playing</label> <input type="checkbox" className=""  id="play"name="int" value="play" onChange={checkboxValidate} />
//               <label for="read">Books Read</label>  <input type="checkbox" className="" id="read" name="int" value="read" onChange={checkboxValidate} />
//               <label for="dance">Dancing</label> <input type="checkbox" className="" id="dance" name="int" value="dance" onChange={checkboxValidate}/>
//               <label for="travel">Travelling</label> <input type="checkbox" className="" id="travel" name="int" value="travel" onChange={checkboxValidate}/>
//             </td>
//             <td><p>{errors.Interests}</p></td>  
//           </tr>  
         
          
        
//           <tr>
//             <td><label className="">Certificate</label> </td>  
//           </tr>  
        

// {
//       (addval.map((data,i)=>{
//        return (
//         <>
//         <tr>
//         <td></td>
//         <td><input type="text" name="title"  className="certificate"  onChange={(e)=>{
//           handleChange(e,i)
//         }} >
//         </input></td>
//         <td><input type="date" name="date"  className="" min={'1992-01-01'} max={'2020-12-31'} onChange={(e)=>{
//           handleChange(e,i)
//         }}>
//              </input></td>
//               <td><button type="button" onClick={()=>{
//               handleadd()
//            }}>+</button></td>


// {
//             i  ? <td><button type="button" onClick={(e)=>{
//               handleRemove(e,i)
//              }}>x</button></td> :null}
//         </tr>
//       </>
//        )
//       }))
      
// }
// {/* <tr><td></td><td>{JSON.stringify(addval)}</td></tr> */}
//            <tr><td></td><td><p>{errors.inputdata}</p></td></tr>
//             <tr><td></td><td><p>{errors.title}</p></td></tr>
//              <tr><td></td><td><p>{errors.date}</p></td></tr>
          
//           <tr colSpan="2">
//             <td className="">
//               <button type="submit" >
//                 Submit  
//               </button>  
//             </td>  
//           </tr>  
          

//         </table>  
//       </form>  
//     </>
          

//   );
};
