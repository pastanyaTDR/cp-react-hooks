import "./App.css";
import MovieList from "./components/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Navbar";
import Create from "./components/Create";
function App() {
  console.log(window.location.pathname)


  return <>
  <Menu/>


  {window.location.pathname =="/create" ? <Create/> : <MovieList/>}
 </>;
}

export default App;
