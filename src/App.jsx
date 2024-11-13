import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./Components/HeaderComponent";
import WatchListComponent from "./Components/WatchListComponent";
import WatchedComponent from "./Components/WatchedComponent";
import AddComponent from "./Components/AddComponent";
import { GlobalProvider } from "./Context/GlobalState";


function App() {
  return (
    <>
      <GlobalProvider className="main-content">
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<WatchListComponent />} />
            <Route path="/watched" element={<WatchedComponent />} />
            <Route path="/add" element={<AddComponent />} />
          </Routes>
          
        </Router>
      </GlobalProvider>
      
    </>
  );
}

export default App;
