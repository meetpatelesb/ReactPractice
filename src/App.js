import TransactionForm from "./components/Form";
import Transaction from "./components/Transaction";
import View from "./components/View";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";

function App() {
  return (
    <>
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<TransactionForm />} />
            <Route path="/create/:id" element={<TransactionForm />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/transaction/:id" element={<View />} />
          </Routes>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
