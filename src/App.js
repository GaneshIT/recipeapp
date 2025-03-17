import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddRecipe from "./components/addrecipe";
import Login from "./components/login";
import Navbar from "./components/navbar";
import RecipeList from "./components/recipelist";
import Signup from "./components/signup";
const App = () => {
  return (
    <Router>
    <Navbar></Navbar>
   
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/add" element={<AddRecipe />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
    </Router>
  );
};

export default App;
