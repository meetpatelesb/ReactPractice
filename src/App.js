import  Auth from './components/auth/Auth';
import Unauth from './components/auth/Unauth';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const  App = ()=> {
 
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/public/*" element={<Unauth />} />
            <Route path="/*" element={<Auth />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;
