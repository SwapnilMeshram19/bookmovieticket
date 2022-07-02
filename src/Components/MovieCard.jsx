import React from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import MovieDetails from "./MovieDetails";
const MovieCard = ({ movie }) => {

    console.log(movie);
  return (
    <div>
      <Card sx={{ width: "15vw", height:"83vh", marginBottom: "10px", padding:"5px"}} className="movie-card">
        <img src={movie.poster_path} style={{ width: "100%",height:"80%" }}></img>
        <h3>{movie.title}</h3>
       
          <Button varient="outlined" sx={{width:"100%", backgroundColor:"black",fontWeight:"700"}}>More Details</Button>
      </Card>
    </div>
  );
};
export default MovieCard;
