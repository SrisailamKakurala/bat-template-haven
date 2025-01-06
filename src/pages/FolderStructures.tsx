import { Button } from "@/components/ui/button";

const FolderStructures = () => {
  const structures = [
    {
      name: "React Project",
      description: "Modern React project structure with best practices",
      type: "Frontend"
    },
    {
      name: "Node.js API",
      description: "Scalable Node.js API structure with Express",
      type: "Backend"
    },
    {
      name: "Full Stack App",
      description: "Complete full-stack application structure",
      type: "Full Stack"
    },
    {
      name: "Next.js App",
      description: "Production-ready Next.js project structure",
      type: "Frontend"
    }
  ];

  return (
    <div className="container mx-auto p-8 bg-[#111]">
      <h1 className="text-3xl font-bold mb-8 text-red-600">Folder Structures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {structures.map((structure, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">{structure.name}</h3>
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