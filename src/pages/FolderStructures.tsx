import { Button } from "@/components/ui/button";

const FolderStructures = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Folder Structures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example folder structures */}
        {['React', 'Node.js', 'Full Stack', 'Next.js'].map((type) => (
          <div key={type} className="glass-panel p-6 rounded-lg space-y-4">
            <h3 className="text-xl font-semibold">{type} Structure</h3>
            <p className="text-muted-foreground">Best practices for {type} projects</p>
            <Button className="w-full">View Structure</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FolderStructures;