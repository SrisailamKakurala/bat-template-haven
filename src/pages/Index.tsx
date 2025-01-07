import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#111]">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold space-y-2">
            <div>Unleash the <span className="text-red-600">Power</span> of Instant</div>
            <div><span className="text-red-600">Project Kickstarts</span> with</div>
            <div className="text-red-600">
              <img 
                src="/lovable-uploads/9038ef8c-a77e-4c34-9983-c7450e1b61f2.png" 
                alt="Bat Templates" 
                className="w-[400px] mx-auto mt-4"
              />
            </div>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/templates">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                Explore Templates
              </Button>
            </Link>
            <Link to="/folders">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg w-full sm:w-auto">
                Explore Folders
              </Button>
            </Link>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/login">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 text-base">
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2 text-base">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;