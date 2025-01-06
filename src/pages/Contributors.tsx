import { UserCircle2Icon } from "lucide-react";

const Contributors = () => {
  const contributors = [
    {
      name: "John Doe",
      role: "Core Developer",
      contributions: 156,
      avatar: null
    },
    {
      name: "Jane Smith",
      role: "Template Designer",
      contributions: 89,
      avatar: null
    },
    // Add more contributors as needed
  ];

  return (
    <div className="container mx-auto p-8 bg-[#111]">
      <h1 className="text-3xl font-bold mb-8 text-red-600">Contributors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributors.map((contributor, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <div className="flex items-center gap-4">
              {contributor.avatar ? (
                <img 
                  src={contributor.avatar} 
                  alt={contributor.name} 
                  className="w-16 h-16 rounded-full"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center">
                  <UserCircle2Icon className="w-8 h-8 text-gray-400" />
                </div>
              )}
              <div>
                <h3 className="text-xl font-semibold text-white">{contributor.name}</h3>
                <p className="text-gray-400">{contributor.role}</p>
                <p className="text-sm text-red-600 mt-1">
                  {contributor.contributions} contributions
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;