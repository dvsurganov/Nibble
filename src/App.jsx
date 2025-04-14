import './index.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./Components/Homepage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import RecipeList from "./Components/RecipeList";
import RecipeDetail from "./Components/RecipeDetail";
import TestAPI from "./Components/TestAPI.jsx";
import {Subscript} from "lucide-react";
import Subscriptions from "./Components/Subscriptions.jsx";

function App() {
    return (
        <Router>  {/* Add this Router component to wrap everything */}
            <div className="App bg-light">
                <Navbar />
                <Subscriptions />

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/test-api" element={<TestAPI />} />

                    <Route path="/recipes/:category" element={<RecipeList />} />
                    <Route path="/recipe/:id" element={<RecipeDetail />} />
                    {/* Add more routes as needed */}
                </Routes>
                {/*<Footer />  /!* I've added Footer here assuming you want it on all pages *!/*/}
            </div>
        </Router>
    );
}

export default App;
