import Button from "./Button";
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function Hello(){
  useEffect(() => {
    console.log("created :)");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  //const onClick = () => setValue((prev) => prev + 1);
  const onClick = () => setShowing((prev) => !prev);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]); 
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter & keyword' changes");
  }, [counter, keyword]);
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..." 
      />
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={"Continue"} />

      <h1>{counter}</h1>
      {/* <button onClick={onClick}>click me!!</button> */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
