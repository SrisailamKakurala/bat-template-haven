import { Button } from "@/components/ui/button";
import { UserCircle2Icon } from "lucide-react";

const Profile = () => {
  return (
    <div className="container mx-auto p-8 bg-[#111]">
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-lg p-8">
        <div className="text-center mb-8">
          <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
            <UserCircle2Icon className="w-16 h-16 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-white">John Doe</h1>
          <p className="text-gray-400">john.doe@example.com</p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-2">Account Details</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Member since: January 2024</p>
              <p className="text-gray-400">Templates Used: 12</p>
              <p className="text-gray-400">Contributions: 5</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button className="w-full bg-gray-800 hover:bg-gray-700">
              Edit Profile
            </Button>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;