import { useState } from "react";


function Filter({ movies, setFiltred }) {
  console.log(movies);
  const [title, setTitle] = useState("")
  const HandleTitleSearch = (e) => {
    const titleRegex = new RegExp(e, "i")

    const filtred = movies.filter((el) => {
      return titleRegex.test(el.title)

    })
    setFiltred(filtred)
  }
  const [rating, setRating] = useState("")
  const HandelReatingSearch = (e) => {

    console.log(e)
    const filterd = movies.filter((el) => {
      console.log(el.rating)
      return el.rating < parseFloat(e) && el.rating <= parseFloat(e) + 0.9
    })
    console.log(filterd,"here")
    setFiltred(filterd)
  }
  
return (  <div>
  <input type="text"
    onKeyUp={(e) => {
      if (e.key === "Enter") {
        HandleTitleSearch(title)
      }
    }}
    onChange={(e) => {
      setTitle(e.target.value)
     
    }} />
     <input
        type="number"
        placeholder="Filter by rating (1-5)"
        min="1"
        max="5"
        step="0.1"
   
        onChange={(e)=> HandelReatingSearch(e.target.value)}
        />
</div>
)}
export default Filter