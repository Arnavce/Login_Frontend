import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUpPage from "../pages/SignUp"



function App(){
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage/>} />
          /</Routes>

      
        </BrowserRouter>
    )

}

export default App;

