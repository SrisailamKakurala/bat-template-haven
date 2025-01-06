import { Button } from "@/components/ui/button";
import { UserCircle2Icon, Mail, MapPin, Calendar, Link as LinkIcon } from "lucide-react";

const Profile = () => {
  const userStats = [
    { label: "Templates", value: "23" },
    { label: "Folders", value: "45" },
    { label: "Bookmarks", value: "128" },
    { label: "Contributions", value: "67" }
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 bg-[#111]">
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Profile Image */}
          <div className="md:w-1/3">
            <div className="w-48 h-48 bg-gray-800 rounded-full mx-auto flex items-center justify-center">
              <UserCircle2Icon className="w-24 h-24 text-gray-400" />
            </div>
          </div>
          
          {/* Right side - Profile Info */}
          <div className="md:w-2/3">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h1 className="text-2xl font-bold text-white">John Doe</h1>
                <Button className="bg-red-600 hover:bg-red-700 w-full md:w-auto">
                  Edit Profile
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-gray-800">
                {userStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Contact Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Joined January 2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <LinkIcon className="w-4 h-4" />
                  <a href="#" className="text-red-600 hover:text-red-500">https://johndoe.dev</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Details Section */}
        <div className="mt-8 space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Created new template "Modern Dashboard"</span>
                <span className="text-gray-500">2 days ago</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Updated folder structure "React Native Setup"</span>
                <span className="text-gray-500">5 days ago</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Bookmarked "E-commerce Template"</span>
                <span className="text-gray-500">1 week ago</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-red-600 mb-4">Popular Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-900 rounded-lg">
                <h4 className="text-white font-medium">React Components Library</h4>
                <p className="text-gray-400 text-sm mt-2">A collection of reusable React components</p>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg">
                <h4 className="text-white font-medium">Authentication Templates</h4>
                <p className="text-gray-400 text-sm mt-2">Secure auth flow templates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;