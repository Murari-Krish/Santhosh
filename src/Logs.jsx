// pages/logs.js
import { useEffect, useState } from "react";
import LogTable from "../components/LogTable";

export default function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            const res = await fetch("/api/logs");
            const data = await res.json();
            setLogs(data);
        };
        fetchLogs();
    }, []);

    return <LogTable logs={logs} />;
}
