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
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
























// render({
// const strings = ["Home", "Shop", "About Me"];
// const listItems = strings.map((string) => <li>{string}</li>);
// <ul>{listItems}</ul>;
// (listItems, document.getElementById("root"))
// });

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();
