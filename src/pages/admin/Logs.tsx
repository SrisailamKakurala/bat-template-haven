import { useState } from "react";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, History } from "lucide-react";

const AdminLogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [logs] = useState([
    {
      id: "1",
      action: "Template Approved",
      user: "John Doe",
      userRole: "admin",
      timestamp: "2024-02-20T10:30:00",
      details: "Approved React Project Setup template"
    },
    {
      id: "2",
      action: "User Role Updated",
      user: "Jane Smith",
      userRole: "admin",
      timestamp: "2024-02-20T09:15:00",
      details: "Promoted Bob to contributor"
    },
    // Add more mock logs as needed
  ]);

  const filteredLogs = logs.filter(log =>
    log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.details.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <History className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl font-bold text-white">Activity Logs</h1>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="search"
            placeholder="Search logs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-900 border-gray-700 text-white"
          />
        </div>
      </div>

      <div className="rounded-lg border border-gray-800 bg-gray-900">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-400">Action</TableHead>
              <TableHead className="text-gray-400">User</TableHead>
              <TableHead className="text-gray-400">Role</TableHead>
              <TableHead className="text-gray-400">Timestamp</TableHead>
              <TableHead className="text-gray-400">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className="text-white">{log.action}</TableCell>
                <TableCell className="text-white">{log.user}</TableCell>
                <TableCell>
                  <Badge variant={log.userRole === "admin" ? "default" : "secondary"}>
                    {log.userRole}
                  </Badge>
                </TableCell>
                <TableCell className="text-white">
                  {new Date(log.timestamp).toLocaleString()}
                </TableCell>
                <TableCell className="text-gray-300">{log.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminLogs;