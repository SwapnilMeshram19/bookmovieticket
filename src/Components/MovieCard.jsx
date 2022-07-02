import React from "react";
import Card from "@mui/material/Card";
const MovieCard = ({ movie }) => {
  const bookingStatus = false;
  console.log(movie);
  return (
    <div>
      <Card sx={{ width: "15vw", marginBottom: "10px" }}>
        <img src={movie.poster_path} style={{ width: "100%" }}></img>
        <h3>{movie.title}</h3>

        {bookingStatus ? <Button></Button> : <Button></Button>}
      </Card>
    </div>
  );
};
export default MovieCard;
