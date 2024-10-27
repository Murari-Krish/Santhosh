import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppPage from "./App1";
import Logs from "./Logs";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppPage />} />
                <Route path="/logs" element={<Logs />} />
            </Routes>
        </Router>
    );
}

export default App;
