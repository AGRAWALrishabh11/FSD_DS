// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// //import './index.css'
// import App from './App.jsx'
// import Marks from './Marks.jsx'
// import DisplayMarks from './DisplayMarks.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <DisplayMarks/>
//   </StrictMode>
// )
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DisplayMarks from "./DisplayMarks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DisplayMarks />
  </StrictMode>
);
