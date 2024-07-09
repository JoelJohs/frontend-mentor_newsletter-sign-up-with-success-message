import Home from "./views/Home"
import Succes from "./views/Success";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Succes />} />
    </Routes>
    </BrowserRouter>
  )}

export default App;
