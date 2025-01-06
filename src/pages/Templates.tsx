import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const templates = [
    {
      name: "Portfolio",
      description: "Modern portfolio template with animations",
      type: "Personal",
      stars: 5
    },
    {
      name: "E-commerce",
      description: "Complete e-commerce solution with cart",
      type: "Business",
      stars: 4
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
  ];

  const filteredTemplates = templates
    .filter(template => 
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => b.stars - a.stars);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "fill-red-600 text-red-600" : "text-gray-400"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="container mx-auto p-4 md:p-8 bg-[#111]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-red-600">Project Templates</h1>
        <div className="w-full md:w-96">
          <Input
            type="search"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-900 border-gray-700 text-white"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white">{template.name}</h3>
              <StarRating rating={template.stars} />
            </div>
            <p className="text-gray-400 mb-4">{template.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-red-600">{template.type}</span>
              <Button className="bg-red-600 hover:bg-red-700">
                Use Template
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;