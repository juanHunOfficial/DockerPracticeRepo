import './App.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import ListWines from "./components/ListWines"
import CreateWine from "./components/CreateWine"

function App() {
  return (
    <div className="App">

      <HashRouter>
      <h1>Notional Nav bar</h1>
      <Link to="/all-wines">List Wines</Link>
      <br></br>
      <Link to="/create">Create Wine</Link>
        <Routes>
          <Route path="/all-wines" element={ <ListWines />} />
          <Route path="/create" element={ <CreateWine />} />
        </Routes>
      </HashRouter>
     
    </div>
  );
}

export default App;
