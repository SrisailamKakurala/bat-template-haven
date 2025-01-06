import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const Bookmarks = () => {
  // In a real app, this would come from a global state management solution
  const bookmarkedItems = [
    {
      name: "React Project",
      description: "Modern React project structure with best practices",
      type: "Folder",
      stars: 523,
    },
    {
      name: "Portfolio",
      description: "Modern portfolio template with animations",
      type: "Template",
      stars: 428,
    },
  ];

  const StarCount = ({ count }: { count: number }) => (
    <div className="flex items-center gap-1 text-gray-400">
      <Star className="w-4 h-4" />
      <span className="text-sm">{count}</span>
    </div>
  );

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Your Bookmarks</h1>
      {bookmarkedItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookmarkedItems.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <StarCount count={item.stars} />
              </div>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-red-600">{item.type}</span>
                <Button className="bg-red-600 hover:bg-red-700">
                  View {item.type}
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-panel p-6 rounded-lg text-center">
          <p className="text-muted-foreground mb-4">No bookmarks yet. Start exploring templates and folders!</p>
          <div className="flex justify-center gap-4">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link to="/templates">Browse Templates</Link>
            </Button>
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link to="/folders">Browse Folders</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookmarks;