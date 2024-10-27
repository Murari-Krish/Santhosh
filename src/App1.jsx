import { Link } from "react-router-dom";

export default function AppPage() {
    return (
        <div className="container">
            <h1>Welcome to the Logging System</h1>
            <Link to="/logs">View Logs</Link>
        </div>
    );
}
