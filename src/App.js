import TransactionForm from "./components/Form";
import Transaction from "./components/Transaction";
import View from "./components/View";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
   <>
    {
<BrowserRouter>
  <Routes>
    <Route path="/" element={<TransactionForm/>}/>
    <Route path="/transaction" element={<Transaction/>}/>
    <Route path="/transaction/id" element={<View/>}/>
  </Routes>
</BrowserRouter>

    }
   </>
  );
}

export default App;
