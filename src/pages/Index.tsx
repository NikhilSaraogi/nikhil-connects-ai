import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="bg-card/50 border-t border-border/50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Nikhil Saraogi. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Backend Engineer | AI Explorer | Learning Enthusiast
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
