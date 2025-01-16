import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Plus, BookmarkIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const Templates = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [templates, setTemplates] = useState([
    {
      name: "Portfolio",
      description: "Modern portfolio template with animations",
      type: "Personal",
      stars: 523,
      isBookmarked: false,
      status: "approved"
    },
    {
      name: "E-commerce",
      description: "Complete e-commerce solution with cart",
      type: "Business",
      stars: 428,
      isBookmarked: false,
      status: "approved"
    },
    {
      name: "Blog",
      description: "Clean and minimal blog template",
      type: "Content",
      stars: 4
    },
    {
      name: "Dashboard",
      description: "Admin dashboard with analytics",
      type: "Business",
      stars: 5
    },
    {
      name: "Social Media",
      description: "Social network template with real-time features",
      type: "Social",
      stars: 3
    },
    {
      name: "Landing Page",
      description: "High-converting landing page template",
      type: "Marketing",
      stars: 4
    }
  ]);

  const [newTemplate, setNewTemplate] = useState({
    name: "",
    description: "",
    type: "Personal"
  });

  const handleCreateTemplate = () => {
    if (newTemplate.name && newTemplate.description) {
      // Instead of adding directly to templates, show pending message
      toast({
        title: "Template Submitted",
        description: "Your template has been submitted for approval. It will be visible once approved.",
      });
      
      setNewTemplate({ name: "", description: "", type: "Personal" });
    }
  };

  const toggleBookmark = (index: number) => {
    const updatedTemplates = [...templates];
    updatedTemplates[index].isBookmarked = !updatedTemplates[index].isBookmarked;
    setTemplates(updatedTemplates);
  };

  const filteredTemplates = templates
    .filter(template => 
      (template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      template.status === "approved" // Only show approved templates
    )
    .sort((a, b) => b.stars - a.stars);

  const StarCount = ({ count }: { count: number }) => (
    <div className="flex items-center gap-1 text-gray-400">
      <Star className="w-4 h-4" />
      <span className="text-sm">{count}</span>
    </div>
  );

  return (
    <div className="container mx-auto p-4 md:p-8 bg-[#111]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-red-600">Project Templates</h1>
        <div className="flex gap-4 w-full md:w-auto">
          <Input
            type="search"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-900 border-gray-700 text-white"
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="w-4 h-4" />
                New Template
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 text-white">
              <DialogHeader>
                <DialogTitle>Create New Template</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Template Name"
                  value={newTemplate.name}
                  onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                  className="bg-gray-800 border-gray-700"
                />
                <Input
                  placeholder="Description"
                  value={newTemplate.description}
                  onChange={(e) => setNewTemplate({ ...newTemplate, description: e.target.value })}
                  className="bg-gray-800 border-gray-700"
                />
                <select
                  value={newTemplate.type}
                  onChange={(e) => setNewTemplate({ ...newTemplate, type: e.target.value })}
                  className="w-full bg-gray-800 border-gray-700 rounded-md p-2"
                >
                  <option value="Personal">Personal</option>
                  <option value="Business">Business</option>
                  <option value="Content">Content</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Social">Social</option>
                </select>
                <Button onClick={handleCreateTemplate} className="w-full bg-red-600 hover:bg-red-700">
                  Create Template
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white">{template.name}</h3>
              <StarCount count={template.stars} />
            </div>
            <p className="text-gray-400 mb-4">{template.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-red-600">{template.type}</span>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  onClick={() => toggleBookmark(index)}
                  className={template.isBookmarked ? "text-red-600" : "text-gray-400"}
                >
                  <BookmarkIcon className="w-4 h-4" />
                </Button>
                <Button className="bg-red-600 hover:bg-red-700">
                  Use Template
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
