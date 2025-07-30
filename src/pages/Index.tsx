import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import GitHubProjects from '@/components/GitHubProjects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <GitHubProjects />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/50 border-t border-border/50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Nikhil Saraogi. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Powered by AI and passion for innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
