// components/LogTable.js
export default function LogTable({ logs }) {
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th>Action Type</th>
                        <th>Timestamp</th>
                        <th>User ID</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log) => (
                        <tr key={log._id}>
                            <td>{log.actionType}</td>
                            <td>{new Date(log.timestamp).toLocaleString()}</td>
                            <td>{log.userId}</td>
                            <td>{log.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
