import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={movie.posterURL} />
      <Card.Body>
        <Card.Title> {movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text ><b>{movie.rating}</b></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
