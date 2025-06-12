import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import BookForm from "./pages/BookForm";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/book-form/edit/:id" element={<BookForm />} />
      <Route path="/book-form/:mode" element={<BookForm />} />
    </Routes>
  );
}

export default App;
