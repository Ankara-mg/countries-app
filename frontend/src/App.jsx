import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryList from "./components/CountryList/CountryList";
import CountryData from "./components/CountryData/CountryData";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/:countryCode" element={<CountryData />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
