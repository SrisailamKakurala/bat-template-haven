import { Button } from "@/components/ui/button";

const Bookmarks = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Bookmarks</h1>
      <div className="glass-panel p-6 rounded-lg">
        <p className="text-muted-foreground text-center">No bookmarks yet. Start exploring templates!</p>
        <Button className="mt-4 mx-auto block">Browse Templates</Button>
      </div>
    </div>
  );
};

export default Bookmarks;