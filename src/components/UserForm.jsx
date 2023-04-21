import "./UserForm.css";

export const UserForm = () => {
  return (
    <>
      <h2 className="title">User Form</h2>

      <form>
        <table className="table">
          <tr>
            <td>
              <label className="">FirstName:</label>
            </td>
            <td>
              <input type="text" className=""></input>
            </td>
            <br></br>
          </tr>
          <tr>
            <td>
              <label className="">LastName:</label>
            </td>
            <td>
              <input type="text" className=""></input>
            </td>
            <br></br>
          </tr>
          <tr>
            <td>
              <label className="">Phone:</label>
            </td>
            <td>
              <input type="number" className=""></input>
            </td>
            <br></br>
          </tr>
          <tr>
            <td>
              <label className="">Email:</label>
            </td>
            <td>
              <input type="email" className=""></input>
            </td>
            <br></br>
          </tr>
          <tr>
            <td>
              <label className="">Address:</label>
            </td>
            <td>
              <textarea
                type="textarea"
                cols="40"
                rows="5"
                className=""
              ></textarea>
            </td>
            <br></br>
          </tr>
          <tr>
            <td>
              <label className="">D.O.B.:</label>
            </td>
            <td>
              <input type="date" className=""></input>
            </td>
            <br></br>
          </tr>
          <tr>
            <td>
              <label className="">Gender:</label>
            </td>
            <td>
              {" "}
              <input type="radio" className="" name="male" />
              Male
              <input type="radio" className="" name="male" />
              Female
              <input type="radio" className="" name="male" />
              Other
            </td>
            <br></br>
          </tr>

          <tr>
            <td>
              <label className="">Interests:</label>
            </td>
            <td>
              Playing <input type="checkbox" className="" name="Playing" />
              Books Read <input type="checkbox" className="" name="Playing" />
              Dancing <input type="checkbox" className="" name="Playing" />
              Travelling <input type="checkbox" className="" name="Playing" />
            </td>
          </tr>

          <tr>
            <td></td>
          </tr>

          <tr colspan="2">
            <td className=""><button type="submit" className="btn">Submit</button></td>
             </tr>
        </table>
      </form>
    </>
  );
};
