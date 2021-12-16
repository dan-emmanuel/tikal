
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";




const App = () => {
  return (
    < >
      <Routes>
        <Route path="">
          <Route exact path='/' element={<Home/>}/>
        </Route>
        <Route path="/part1">
          <Route exact path='/' element={<Home/>}/>
        </Route>
        <Route path="/part2">
          <Route exact path='/' element={<Home/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
