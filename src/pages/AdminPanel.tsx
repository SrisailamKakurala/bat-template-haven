import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, X, Search, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface PendingItem {
  id: string;
  name: string;
  type: "folder" | "template";
  description: string;
  author: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
}

const AdminPanel = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [pendingItems, setPendingItems] = useState<PendingItem[]>([
    {
      id: "1",
      name: "Modern React Setup",
      type: "folder",
      description: "A comprehensive React project structure with best practices",
      author: "john.doe",
      submittedAt: "2024-02-20",
      status: "pending"
    },
    {
      id: "2",
      name: "E-commerce Dashboard",
      type: "template",
      description: "Complete dashboard template for e-commerce applications",
      author: "jane.smith",
      submittedAt: "2024-02-19",
      status: "pending"
    },
    // Add more mock data as needed
  ]);

  const handleApprove = (id: string) => {
    setPendingItems(items =>
      items.map(item =>
        item.id === id ? { ...item, status: "approved" } : item
      )
    );
    toast({
      title: "Item Approved",
      description: "The item has been approved and is now public.",
    });
  };

  const handleReject = (id: string) => {
    setPendingItems(items =>
      items.map(item =>
        item.id === id ? { ...item, status: "rejected" } : item
      )
    );
    toast({
      title: "Item Rejected",
      description: "The item has been rejected.",
      variant: "destructive",
    });
  };

  const filteredItems = pendingItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="w-8 h-8 text-red-600" />
        <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="search"
            placeholder="Search by name, description, or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-900 border-gray-700 text-white w-full md:w-96"
          />
        </div>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList className="bg-gray-900">
          <TabsTrigger value="pending" className="data-[state=active]:bg-red-600">
            Pending Approval
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-red-600">
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {filteredItems.filter(item => item.status === "pending").map((item) => (
            <Card key={item.id} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">{item.name}</CardTitle>
                    <CardDescription className="text-gray-400">
                      Submitted by {item.author} on {new Date(item.submittedAt).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <Badge variant={item.type === "folder" ? "secondary" : "outline"}>
                    {item.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleApprove(item.id)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Check className="w-4 h-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleReject(item.id)}
                    variant="destructive"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reject
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          {filteredItems.filter(item => item.status !== "pending").map((item) => (
            <Card key={item.id} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white">{item.name}</CardTitle>
                    <CardDescription className="text-gray-400">
                      Submitted by {item.author} on {new Date(item.submittedAt).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant={item.type === "folder" ? "secondary" : "outline"}>
                      {item.type}
                    </Badge>
                    <Badge variant={item.status === "approved" ? "default" : "destructive"}>
                      {item.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminPanel;