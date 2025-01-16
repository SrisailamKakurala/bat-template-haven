import { useState } from "react";
import { Button } from "@/components/ui/button";
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
import { Search, FileCode2, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AdminTemplates = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [templates] = useState([
    {
      id: "1",
      name: "React Project Setup",
      type: "Frontend",
      author: "John Doe",
      status: "published",
      createdAt: "2024-02-15",
      downloads: 156
    },
    {
      id: "2",
      name: "Node.js API Structure",
      type: "Backend",
      author: "Jane Smith",
      status: "pending",
      createdAt: "2024-02-20",
      downloads: 89
    },
    // Add more mock templates as needed
  ]);

  const handleEdit = (templateId: string) => {
    toast({
      title: "Edit Template",
      description: "Template editing mode activated.",
    });
  };

  const handleDelete = (templateId: string) => {
    toast({
      title: "Template Deleted",
      description: "Template has been removed successfully.",
      variant: "destructive",
    });
  };

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileCode2 className="w-8 h-8 text-red-600" />
          <h1 className="text-3xl font-bold text-white">Template Management</h1>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="search"
            placeholder="Search templates..."
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
              <TableHead className="text-gray-400">Name</TableHead>
              <TableHead className="text-gray-400">Type</TableHead>
              <TableHead className="text-gray-400">Author</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Created</TableHead>
              <TableHead className="text-gray-400">Downloads</TableHead>
              <TableHead className="text-gray-400">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTemplates.map((template) => (
              <TableRow key={template.id}>
                <TableCell className="text-white">{template.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{template.type}</Badge>
                </TableCell>
                <TableCell className="text-white">{template.author}</TableCell>
                <TableCell>
                  <Badge variant={template.status === "published" ? "default" : "secondary"}>
                    {template.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-white">
                  {new Date(template.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="text-white">{template.downloads}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(template.id)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(template.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminTemplates;