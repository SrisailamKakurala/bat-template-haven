import { Button } from "@/components/ui/button";

const Templates = () => {
  const templates = [
    {
      name: "Portfolio",
      description: "Modern portfolio template with animations",
      type: "Personal"
    },
    {
      name: "E-commerce",
      description: "Complete e-commerce solution with cart",
      type: "Business"
    },
    {
      name: "Blog",
      description: "Clean and minimal blog template",
      type: "Content"
    },
    {
      name: "Dashboard",
      description: "Admin dashboard with analytics",
      type: "Business"
    }
  ];

  return (
    <div className="container mx-auto p-8 bg-[#111]">
      <h1 className="text-3xl font-bold mb-8 text-red-600">Project Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template, index) => (
          <div key={index} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">{template.name}</h3>
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