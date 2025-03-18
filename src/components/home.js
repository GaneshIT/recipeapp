import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchRecipes } from "../store/actions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { recipes, status } = useSelector((state) => state.recipes);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token==null)
        navigate("/login");
    if (status === "idle") dispatch(fetchRecipes());
  }, [dispatch, status]);

  return (
    <div className="container">
  
      <h2>Recipes</h2>
      <hr />
      <div className="row">
          {
            recipes.map((recipe) => (
              <div className="col-md-4">
              <div className="card">
                  <div className="card-header">{recipe.name} - {recipe.category}</div>
                  <div className="card-body">
                  <div className="card-text">Ingredients :{recipe.ingredients}</div><hr/>
                  <div className="card-text">Instructions :{recipe.instructions}</div><hr/>
                  <div className="card-text">Posted by :{recipe.user.firstname}</div>
                  </div>
              </div></div>
            ))
          }
      </div>
      {/* <ul style={{listStyle:"none"}}>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.name} - {recipe.category}
            <button className="btn btn-primary" onClick={() => navigate(`/edit/${recipe.id}`)}>Edit</button>
            <button className="btn btn-danger" onClick={() => dispatch(removeRecipe(recipe.id))}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
