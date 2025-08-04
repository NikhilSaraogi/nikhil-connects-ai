import { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Scene3D from '@/components/Scene3D';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const phrases = [
    'Data Scientist',
    'Software Engineer', 
    'Python Developer',
    'AI Researcher'
  ];

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    let currentIndex = 0;
    
    const typewriter = setInterval(() => {
      if (currentIndex <= phrase.length) {
        setDisplayText(phrase.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typewriter);
        setTimeout(() => {
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typewriter);
  }, [currentPhraseIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
        <div className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{ left: '25%', top: '40%', animationDelay: '1s' }} />
        <div className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{ left: '45%', top: '15%', animationDelay: '2s' }} />
        <div className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{ left: '60%', top: '35%', animationDelay: '3s' }} />
        <div className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{ left: '80%', top: '25%', animationDelay: '4s' }} />
        <div className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{ left: '15%', top: '60%', animationDelay: '5s' }} />
        <div className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{ left: '35%', top: '80%', animationDelay: '0.5s' }} />
        <div className="absolute w-1 h-1 bg-primary rounded-full animate-float" style={{ left: '70%', top: '70%', animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-cyber bg-clip-text text-transparent">
                Nikhil Saraogi
              </h1>
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <span className="text-2xl lg:text-3xl text-muted-foreground">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Specialized in building AI-powered solutions, LLM applications, and scalable 
              data science systems. Currently architecting next-gen industrial AI at ExactSpace 
              Technologies with expertise in transformers, vector databases, and agentic workflows.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91-8009848257</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>nikhilsarawgi9616@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="default" size="lg" className="glow-primary" asChild>
                <a href="https://github.com/NikhilSaraogi" target="_blank" rel="noopener noreferrer">
                  View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" className="transition-bounce hover:glow-accent" asChild>
                <a href="https://drive.google.com/file/d/1M3DlqNXsKOafchLmyF6iKei8NJAQIYHe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:glow-primary transition-smooth" asChild>
                <a href="https://github.com/NikhilSaraogi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:glow-accent transition-smooth" asChild>
                <a href="https://www.linkedin.com/in/nikhilsaraogi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:glow-cyber transition-smooth" asChild>
                <a href="mailto:nikhilsarawgi9616@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Enhanced 3D Profile Display */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* 3D Background Scene */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <Suspense fallback={<div className="w-full h-full bg-gradient-primary rounded-full animate-pulse" />}>
                  <Scene3D />
                </Suspense>
              </div>
              
              {/* Artistic floating elements */}
              <div className="absolute inset-0 z-5 pointer-events-none">
                {/* Floating geometric shapes */}
                <div className="absolute w-2 h-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-float opacity-60" style={{ left: '15%', top: '20%', animationDelay: '0s' }} />
                <div className="absolute w-2 h-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-float opacity-60" style={{ left: '30%', top: '35%', animationDelay: '0.8s' }} />
                <div className="absolute w-2 h-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-float opacity-60" style={{ left: '45%', top: '15%', animationDelay: '1.6s' }} />
                <div className="absolute w-2 h-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-float opacity-60" style={{ left: '60%', top: '40%', animationDelay: '2.4s' }} />
                
                {/* Artistic light rays */}
                <div className="absolute w-px h-16 bg-gradient-to-t from-transparent via-primary/20 to-transparent animate-pulse" style={{ left: '25%', top: '10%', transform: 'rotate(0deg)', animationDelay: '0s' }} />
                <div className="absolute w-px h-16 bg-gradient-to-t from-transparent via-primary/20 to-transparent animate-pulse" style={{ left: '45%', top: '20%', transform: 'rotate(30deg)', animationDelay: '1.5s' }} />
                <div className="absolute w-px h-16 bg-gradient-to-t from-transparent via-primary/20 to-transparent animate-pulse" style={{ left: '65%', top: '30%', transform: 'rotate(60deg)', animationDelay: '3s' }} />
              </div>

              {/* Enhanced tech stack badges with better positioning */}
              <div className="absolute inset-0 z-10">
                <Badge className="absolute top-6 left-6 bg-gradient-to-r from-primary/80 to-primary/60 backdrop-blur-md border border-white/30 animate-float shadow-xl hover:scale-110 transition-all duration-500 text-white font-medium text-xs px-3 py-1.5 rounded-full" style={{ animationDelay: '0s' }}>
                  Python
                </Badge>
                <Badge className="absolute top-16 right-8 bg-gradient-to-r from-accent/80 to-accent/60 backdrop-blur-md border border-white/30 animate-float shadow-xl hover:scale-110 transition-all duration-500 text-white font-medium text-xs px-3 py-1.5 rounded-full" style={{ animationDelay: '0.5s' }}>
                  AI/ML
                </Badge>
                <Badge className="absolute top-1/3 left-2 bg-gradient-to-r from-secondary/80 to-secondary/60 backdrop-blur-md border border-white/30 animate-float shadow-xl hover:scale-110 transition-all duration-500 text-white font-medium text-xs px-3 py-1.5 rounded-full" style={{ animationDelay: '1s' }}>
                  LLMs
                </Badge>
                <Badge className="absolute bottom-20 left-6 bg-gradient-to-r from-primary/80 to-primary/60 backdrop-blur-md border border-white/30 animate-float shadow-xl hover:scale-110 transition-all duration-500 text-white font-medium text-xs px-3 py-1.5 rounded-full" style={{ animationDelay: '1.5s' }}>
                  FastAPI
                </Badge>
                <Badge className="absolute bottom-6 right-6 bg-gradient-to-r from-accent/80 to-accent/60 backdrop-blur-md border border-white/30 animate-float shadow-xl hover:scale-110 transition-all duration-500 text-white font-medium text-xs px-3 py-1.5 rounded-full" style={{ animationDelay: '2s' }}>
                  Data Science
                </Badge>
                <Badge className="absolute top-1/2 right-4 bg-gradient-to-r from-secondary/80 to-secondary/60 backdrop-blur-md border border-white/30 animate-float shadow-xl hover:scale-110 transition-all duration-500 text-white font-medium text-xs px-3 py-1.5 rounded-full" style={{ animationDelay: '2.5s' }}>
                  VectorDB
                </Badge>
              </div>

              {/* Enhanced Central Profile Area */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-cyber/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-primary/40 shadow-2xl hover:border-accent/60 transition-all duration-500 hover:scale-105">
                  {/* Profile Picture Container with Enhanced Effects */}
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-gradient-to-br from-card/80 to-muted/80 border-2 border-border/30 flex items-center justify-center relative backdrop-blur-sm">
                    {/* Profile Image */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
                      <img 
                        src="/pic.jpeg"
                        alt="Nikhil Saraogi Profile"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {/* Multi-layered AI scanning effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cyber/5 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
                      
                      {/* Holographic border effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary via-accent to-cyber bg-clip-border animate-spin" style={{ animationDuration: '8s' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Neural Network Connections */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" style={{ left: '20%', top: '50%', transform: 'rotate(0deg)', animationDelay: '0s' }} />
                <div className="absolute w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" style={{ left: '28%', top: '70%', transform: 'rotate(45deg)', animationDelay: '0.2s' }} />
                <div className="absolute w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" style={{ left: '35%', top: '30%', transform: 'rotate(90deg)', animationDelay: '0.4s' }} />
                <div className="absolute w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" style={{ left: '65%', top: '60%', transform: 'rotate(135deg)', animationDelay: '0.6s' }} />
                <div className="absolute w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" style={{ left: '75%', top: '40%', transform: 'rotate(180deg)', animationDelay: '0.8s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;