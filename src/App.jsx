import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

const PUBLC_URL = import.meta.env.VITE_PUBLC_URL

function App() {
  return (
    <BrowserRouter basename={PUBLC_URL}>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;