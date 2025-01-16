import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AdminContributors = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [contributors] = useState([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      contributions: 15,
      status: "active",
      joinedAt: "2024-01-15"
    },
    // Add more mock data as needed
  ]);

  const handleStatusChange = (id: string, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Contributor status has been updated to ${newStatus}.`,
    });
  };

  const filteredContributors = contributors.filter(contributor =>
    contributor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contributor.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <UserCheck className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl font-bold text-white">Contributors</h1>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="search"
            placeholder="Search contributors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-900 border-gray-700 text-white"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredContributors.map((contributor) => (
          <Card key={contributor.id} className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white">{contributor.name}</CardTitle>
                  <p className="text-sm text-gray-400">{contributor.email}</p>
                </div>
                <Badge variant={contributor.status === "active" ? "default" : "secondary"}>
                  {contributor.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-gray-300">
                  <p>Contributions: {contributor.contributions}</p>
                  <p className="text-sm text-gray-400">
                    Joined: {new Date(contributor.joinedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => handleStatusChange(contributor.id, "active")}
                  >
                    Activate
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleStatusChange(contributor.id, "suspended")}
                  >
                    Suspend
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminContributors;