import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="glass-panel p-8 rounded-lg max-w-2xl mx-auto space-y-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">👤</span>
          </div>
          <h1 className="text-2xl font-bold">User Profile</h1>
          <p className="text-muted-foreground">user@example.com</p>
        </div>
        
        <div className="space-y-4">
          <Button className="w-full" variant="outline">Edit Profile</Button>
          <Button className="w-full" variant="destructive">Sign Out</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;