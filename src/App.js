
import User from "./components/User";
import UserPost from "./components/UserPost";   
import PostComment from "./components/PostComment";
import { UserForm } from "./components/UserForm";
import {    BrowserRouter, Route,Routes} from 'react-router-dom';



const App = () => {
//   return(<User />);
return(
<>{
<BrowserRouter> 

        <Routes>
            <Route path="/" element={<User/>} />
            <Route path="/user-post" element={<UserPost/>} />
             <Route path="/post-comment" element={<PostComment/>} />
             <Route path="/form" element={<UserForm/>} />
          
        </Routes>

    </BrowserRouter>
}</> )
};

export default App;
