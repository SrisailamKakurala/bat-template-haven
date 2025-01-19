import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Plus, BookmarkIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface TemplateFormData {
  title: string;
  description: string;
  githubLink: string;
  tags: string[];
  createdBy: string;
  createdAt: Date;
  likes: number;
  downloads: number;
  isApproved: boolean;
  reviewedAt: Date | null;
}

const Templates = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showTemplateForm, setShowTemplateForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState<TemplateFormData>({
    title: "",
    description: "",
    githubLink: "",
    tags: [],
    createdBy: "user123", // This would come from auth
    createdAt: new Date(),
    likes: 0,
    downloads: 0,
    isApproved: false,
    reviewedAt: null
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    setShowLoginDialog(false);
    setShowTemplateForm(true);
    toast({
      title: "Logged in successfully",
      description: "Welcome back! You can now submit templates.",
    });
  };

  const handleNewTemplate = () => {
    if (!isAuthenticated) {
      setShowLoginDialog(true);
    } else {
      setShowTemplateForm(true);
    }
  };

  const handleSubmitTemplate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting template:", formData);
    toast({
      title: "Template Submitted",
      description: "Your template has been sent for approval. We'll review it soon.",
    });
    setShowTemplateForm(false);
    setFormData({
      title: "",
      description: "",
      githubLink: "",
      tags: [],
      createdBy: "user123",
      createdAt: new Date(),
      likes: 0,
      downloads: 0,
      isApproved: false,
      reviewedAt: null
    });
  };

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
          <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
            <DialogTrigger asChild>
              <Button onClick={handleNewTemplate} className="bg-red-600 hover:bg-red-700">
                <Plus className="w-4 h-4" />
                New Template
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 text-white">
              <DialogHeader>
                <DialogTitle>Login Required</DialogTitle>
                <DialogDescription className="text-gray-400">
                  This is a demo login. Click the button below to simulate logging in.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4">
                <Button 
                  onClick={handleLogin} 
                  className="bg-red-600 hover:bg-red-700 w-full"
                >
                  Demo Login
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => window.location.href = '/login'} 
                  className="w-full"
                >
                  Go to Real Login
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showTemplateForm} onOpenChange={setShowTemplateForm}>
            <DialogContent className="bg-gray-900 text-white max-w-2xl">
              <DialogHeader>
                <DialogTitle>Submit New Template</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmitTemplate} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="Template Title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your template..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-gray-800 border-gray-700 min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="githubLink">GitHub Link</Label>
                  <Input
                    id="githubLink"
                    placeholder="https://github.com/username/repo"
                    value={formData.githubLink}
                    onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                    className="bg-gray-800 border-gray-700"
                    type="url"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (comma-separated)</Label>
                  <Input
                    id="tags"
                    placeholder="frontend, backend, react, etc."
                    value={formData.tags.join(", ")}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      tags: e.target.value.split(",").map(tag => tag.trim()).filter(Boolean)
                    })}
                    className="bg-gray-800 border-gray-700"
                  />
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Submit Template
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates
          .filter(template => 
            (template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
            template.status === "approved" // Only show approved templates
          )
          .sort((a, b) => b.stars - a.stars)
          .map((template, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">{template.name}</h3>
                <div className="flex items-center gap-1 text-gray-400">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{template.stars}</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{template.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-red-600">{template.type}</span>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      const updatedTemplates = [...templates];
                      updatedTemplates[index].isBookmarked = !updatedTemplates[index].isBookmarked;
                      setTemplates(updatedTemplates);
                    }}
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
