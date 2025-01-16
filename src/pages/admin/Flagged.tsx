import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flag, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AdminFlagged = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [flaggedItems] = useState([
    {
      id: "1",
      name: "Suspicious Template",
      type: "template",
      reportedBy: "user123",
      reason: "Potential malicious code",
      date: "2024-02-20"
    },
    // Add more mock data as needed
  ]);

  const handleResolve = (id: string) => {
    toast({
      title: "Issue Resolved",
      description: "The flagged item has been reviewed and resolved.",
    });
  };

  const filteredItems = flaggedItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.reason.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Flag className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl font-bold text-white">Flagged Content</h1>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="search"
            placeholder="Search flagged items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-900 border-gray-700 text-white"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">{item.name}</CardTitle>
                  <p className="text-sm text-gray-400">
                    Reported by {item.reportedBy} on {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>
                <Badge variant="destructive">{item.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{item.reason}</p>
              <Button onClick={() => handleResolve(item.id)}>
                Mark as Resolved
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminFlagged;