import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="glass-panel py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">BatTemplates</h1>
        <div className="space-x-4">
          <Link to="/login">
            <Button variant="ghost" className="hover-scale">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button className="hover-scale">Get Started</Button>
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center auth-gradient p-4">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold">
            <span className="text-primary">Empowering Developers</span> with
            <br />
            Tailored Templates
          </h1>
          <p className="text-xl text-muted-foreground">
            Folder and project templates for every use case, from portfolios to e-commerce!
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="hover-scale">
              Explore Templates
            </Button>
            <Button size="lg" variant="outline" className="hover-scale">
              Learn More
            </Button>
          </div>
        </div>
      </main>

      <footer className="glass-panel py-6 px-4 text-center text-muted-foreground">
        <p>© 2024 BatTemplates. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;