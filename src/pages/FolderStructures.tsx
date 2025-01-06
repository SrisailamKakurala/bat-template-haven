import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Plus, BookmarkIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const FolderStructures = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [structures, setStructures] = useState([
    {
      name: "React Project",
      description: "Modern React project structure with best practices",
      type: "Frontend",
      stars: 523,
      isBookmarked: false
    },
    {
      name: "Node.js API",
      description: "Scalable Node.js API structure with Express",
      type: "Backend",
      stars: 428,
      isBookmarked: false
    },
    {
      name: "Full Stack App",
      description: "Complete full-stack application structure",
      type: "Full Stack",
      stars: 612,
      isBookmarked: false
    },
    {
      name: "Next.js App",
      description: "Production-ready Next.js project structure",
      type: "Frontend",
      stars: 445,
      isBookmarked: false
    },
    {
      name: "React Native App",
      description: "Mobile app structure with React Native",
      type: "Mobile",
      stars: 389,
      isBookmarked: false
    },
    {
      name: "GraphQL API",
      description: "Modern GraphQL API structure",
      type: "Backend",
      stars: 467,
      isBookmarked: false
    }
  ]);

  const [newFolder, setNewFolder] = useState({
    name: "",
    description: "",
    type: "Frontend"
  });

  const handleCreateFolder = () => {
    if (newFolder.name && newFolder.description) {
      setStructures([
        ...structures,
        {
          ...newFolder,
          stars: 0,
          isBookmarked: false
        }
      ]);
      setNewFolder({ name: "", description: "", type: "Frontend" });
    }
  };

  const toggleBookmark = (index: number) => {
    const updatedStructures = [...structures];
    updatedStructures[index].isBookmarked = !updatedStructures[index].isBookmarked;
    setStructures(updatedStructures);
  };

  const filteredStructures = structures
    .filter(structure => 
      structure.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      structure.description.toLowerCase().includes(searchQuery.toLowerCase())
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
        <h1 className="text-3xl font-bold text-red-600">Folder Structures</h1>
        <div className="flex gap-4 w-full md:w-auto">
          <Input
            type="search"
            placeholder="Search folders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-900 border-gray-700 text-white"
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-red-600 hover:bg-red-700">
                <Plus className="w-4 h-4" />
                New Folder
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 text-white">
              <DialogHeader>
                <DialogTitle>Create New Folder Structure</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Folder Name"
                  value={newFolder.name}
                  onChange={(e) => setNewFolder({ ...newFolder, name: e.target.value })}
                  className="bg-gray-800 border-gray-700"
                />
                <Input
                  placeholder="Description"
                  value={newFolder.description}
                  onChange={(e) => setNewFolder({ ...newFolder, description: e.target.value })}
                  className="bg-gray-800 border-gray-700"
                />
                <select
                  value={newFolder.type}
                  onChange={(e) => setNewFolder({ ...newFolder, type: e.target.value })}
                  className="w-full bg-gray-800 border-gray-700 rounded-md p-2"
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Full Stack">Full Stack</option>
                  <option value="Mobile">Mobile</option>
                </select>
                <Button onClick={handleCreateFolder} className="w-full bg-red-600 hover:bg-red-700">
                  Create Folder
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStructures.map((structure, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white">{structure.name}</h3>
              <StarCount count={structure.stars} />
            </div>
            <p className="text-gray-400 mb-4">{structure.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-red-600">{structure.type}</span>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  onClick={() => toggleBookmark(index)}
                  className={structure.isBookmarked ? "text-red-600" : "text-gray-400"}
                >
                  <BookmarkIcon className="w-4 h-4" />
                </Button>
                <Button className="bg-red-600 hover:bg-red-700">
                  View Structure
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderStructures;
