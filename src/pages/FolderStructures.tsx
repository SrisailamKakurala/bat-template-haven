import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star } from "lucide-react";

const FolderStructures = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const structures = [
    {
      name: "React Project",
      description: "Modern React project structure with best practices",
      type: "Frontend",
      stars: 5
    },
    {
      name: "Node.js API",
      description: "Scalable Node.js API structure with Express",
      type: "Backend",
      stars: 4
    },
    {
      name: "Full Stack App",
      description: "Complete full-stack application structure",
      type: "Full Stack",
      stars: 5
    },
    {
      name: "Next.js App",
      description: "Production-ready Next.js project structure",
      type: "Frontend",
      stars: 4
    },
    {
      name: "React Native App",
      description: "Mobile app structure with React Native",
      type: "Mobile",
      stars: 3
    },
    {
      name: "GraphQL API",
      description: "Modern GraphQL API structure",
      type: "Backend",
      stars: 4
    }
  ];

  const filteredStructures = structures
    .filter(structure => 
      structure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      structure.description.toLowerCase().includes(searchQuery.toLowerCase())
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
        <h1 className="text-3xl font-bold text-red-600">Folder Structures</h1>
        <div className="w-full md:w-96">
          <Input
            type="search"
            placeholder="Search folders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-900 border-gray-700 text-white"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStructures.map((structure, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white">{structure.name}</h3>
              <StarRating rating={structure.stars} />
            </div>
            <p className="text-gray-400 mb-4">{structure.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-red-600">{structure.type}</span>
              <Button className="bg-red-600 hover:bg-red-700">
                View Structure
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderStructures;