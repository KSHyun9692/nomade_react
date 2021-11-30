import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";
////////////////////Movie////////////////////////

function App(){
  const [loading, setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {movies.map(movie => (
                <div key={movie.id}>
                  <img src={movie.medium_cover_image} />
                  <h2>{movie.title}</h2>
                  <p>{movie.summary}</p>
                  <ul>
                    {movie.genres.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
    </div>
  );
}

////////////////////Movie////////////////////////





/////////////////// Coin Tracker만들어보기////////////////////////////////
// function App(){
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const [value, setValue] = useState();
//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//     .then((response) => response.json())
//     .then((json) => {
//       setCoins(json);
//       setLoading(false);
//     });
//   }, []);
//   const onChange = (event) => setValue(event.target.value);
//   return (
//     <div>
//       <h1>The Coins! ({coins.length}) </h1>
//       {loading ? (
//         <strong>Loading...</strong>
//       ) : (
//         <div>
//           <input
//             type="number"
//             value={value}
//             onChange={onChange}
//             placeholder="Put USD here"
//           />
//           <span>change==></span>
//           <select>
//             {coins.map((coin) => (
//               <option>
//                 {coin.name} ({coin.symbol}): {value ? value / coin.quotes["USD"].price : 0} {coin.symbol}
//               </option> 
//             ))}
//           </select>
//         </div>
//       )}
//     </div>
//   );
// }

/////////////////// Coin Tracker만들어보기////////////////////////////////

// function App(){
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) =>setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if(toDo === ""){
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//   };
//   return(
//   <div>
//     <h1>My To Dos ({toDos.length})</h1>
//     <form onSubmit={onSubmit}>
//       <input 
//         onChange={onChange} 
//         value={toDo} 
//         type="text" 
//         placeholder="Wirte your to do..." 
//       />
//       <button>Add To Do</button>
//     </form>
//     <hr />
//     <ul>
//       {toDos.map((item, index) => 
//       (<li key={index}>{item}</li>
//       ))}
//     </ul>
//   </div>
//   );
// }

// function Hello(){
//   useEffect(() => {
//     console.log("created :)");
//   }, []);
//   return <h1>Hello</h1>;
// }

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const [showing, setShowing] = useState(false);
//   //const onClick = () => setValue((prev) => prev + 1);
//   const onClick = () => setShowing((prev) => !prev);
//   const onChange = (event) => setKeyword(event.target.value);
//   console.log("i run all the time");

//   useEffect(() => {
//     console.log("I run only once");
//   }, []);
//   useEffect(() => {
//     console.log("I run when 'keyword' changes");
//   }, [keyword]); 
//   useEffect(() => {
//     console.log("I run when 'counter' changes");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when 'counter & keyword' changes");
//   }, [counter, keyword]);
//   return (
//     <div>
//       <input 
//         value={keyword} 
//         onChange={onChange} 
//         type="text" 
//         placeholder="Search here..." 
//       />
//       <h1 className={styles.title}>Welcome back!</h1>
//       <Button text={"Continue"} />

//       <h1>{counter}</h1>
//       {/* <button onClick={onClick}>click me!!</button> */}
//       {showing ? <Hello /> : null}
//       <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
//     </div>
//   );
// }

export default App;
