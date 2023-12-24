import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/create" element={<CreateBook />} />
      <Route path="/home/details/:id" element={<ShowBook />} />
      <Route path="/home/edit/:id" element={<EditBook />} />
      <Route path="/home/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
}

export default App;
