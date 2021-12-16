
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Part1 from "./components/Part1/Part1";
import Part2 from "./components/Part2/Part2";




const App = () => {
  return (
    < >
      <Routes>
        <Route path="">
          <Route exact path='/' element={<Home/>}/>
        </Route>
        <Route path="/part1">
          <Route exact path='/part1' element={<Part1/>}/>
        </Route>
        <Route path="/part2">
          <Route exact path='/part2' element={<Part2/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
