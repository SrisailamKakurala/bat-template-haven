import { Button } from "@/components/ui/button";

const Templates = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Project Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {['Portfolio', 'E-commerce', 'Blog', 'Dashboard'].map((type) => (
          <div key={type} className="glass-panel p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">{type} Template</h3>
            <p className="text-muted-foreground">Ready-to-use {type.toLowerCase()} template</p>
            <Button className="w-full">View Template</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;