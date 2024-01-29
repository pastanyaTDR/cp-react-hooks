import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";

function Create() {
  const handle = async (e) => {
    e.preventDefault();
    const newMovie = {
        title: e.target.title.value,
        description: e.target.description.value,
        posterURL: e.target.posterURL.value,
        rating: e.target.rating.value,
    };

    const result = await fetch('http://localhost:3000/movies',{
        method:"POST",
        headers: {
            "Content-Type": "application/json"},
            body : JSON.stringify(newMovie)
    })
   if(result.ok){
    toast.success('Movie created successfully')
    setTimeout(()=>{
        window.location.pathname="/"
    },1000)
   }

   

  };
  return (
    <Form onSubmit={handle}>
      <Form.Group className="mb-3" >
        <Form.Label>title</Form.Label>
        <Form.Control id="title" type="text" placeholder="Enter title" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>posterURL</Form.Label>
        <Form.Control
          id="posterURL"
          type="text"
          placeholder="Enter posterURL"
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>description</Form.Label>
        <Form.Control
          id="description"
          type="text"
          placeholder="Enter description"
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>rating</Form.Label>
        <Form.Control
          id="rating"
          type="number"
          max={5}
          placeholder="Enter rating"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Create;
