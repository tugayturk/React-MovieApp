import './App.css';
import Movies from './Components/Movies';
import {useEffect,useState} from "react"

function App() {
    
    const API_KEY="8bf646dca9acad23e2a82bca5349d574"
    const SEARCH_API=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
    const MOVIE_API=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
    const [searchTerm,setTerm]=useState("")
    const [movies,setMovies] = useState([])
   
    

   const getMovies =(API) =>{
    fetch(API).then(res => res.json())
    .then(data => {
     setMovies(data.results)
     
      })
   }
   
    useEffect( () => {
     getMovies(MOVIE_API)
    },[]);
    
    const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      getMovies(SEARCH_API+searchTerm);
         setTerm("")
      }}
    
      const handleChange = (e) => {
         setTerm(e.target.value)
    }

    const [theme,setTheme]=useState("dark")

const changeTheme = () => {
   
    if (theme === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
}
  return (
   <>
      <header  className={theme === "light" ? "lightHeader": "darkHeader"}>
      <form onSubmit={handleSubmit} className="searchBar">
        <input onChange={handleChange} value={searchTerm} className="search" type="search" placeholder="Search Movie"></input>
      </form>
      <button onClick={changeTheme} className="themeButton">
       Switch Theme
        </button>
    </header>
    <div className={theme === "light" ? "App-light": "App-dark"}>
      
   {movies.length > 0 && movies.map(movie => {
  return  <Movies  key={movie.id} {...movie}/>
   })}
     
    </div></>
  );
}

export default App;
