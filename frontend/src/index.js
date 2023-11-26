import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from "./views/Home";
import Blogs from "./views/Blogs";
import Contact from "./views/Contact";
import NoPage from "./views/NoPage";
import SignUpSPA from "./views/SignUpSPA";
import LoginSPA from "./views/LoginSPA";
import Reviewboard from "./views/Reviewboard";
import AddSong from "./views/AddSong";
import Review from "./views/Review";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signupSPA" element={<SignUpSPA />} />
          <Route path="LoginSPA" element={<LoginSPA />} />
          <Route path="Reviewboard" element={<Reviewboard />} />
          <Route path="AddSong" element={<AddSong />} />
          <Route path="Review" element={<Review />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);