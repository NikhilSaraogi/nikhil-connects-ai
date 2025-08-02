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
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
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
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`shape-${i}`}
                    className="absolute w-2 h-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full animate-float opacity-60"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${20 + Math.sin(i) * 30}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${6 + i}s`
                    }}
                  />
                ))}
                
                {/* Artistic light rays */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`ray-${i}`}
                    className="absolute w-px h-16 bg-gradient-to-t from-transparent via-primary/20 to-transparent animate-pulse"
                    style={{
                      left: `${25 + i * 20}%`,
                      top: `${10 + i * 10}%`,
                      transform: `rotate(${i * 30}deg)`,
                      animationDelay: `${i * 1.5}s`
                    }}
                  />
                ))}
              </div>

              {/* Enhanced tech stack badges with better positioning */}
              <div className="absolute inset-0 z-10">
                {[
                  { text: 'Python', position: 'top-6 left-6', color: 'bg-gradient-to-r from-primary/80 to-primary/60', delay: 0 },
                  { text: 'AI/ML', position: 'top-16 right-8', color: 'bg-gradient-to-r from-accent/80 to-accent/60', delay: 0.5 },
                  { text: 'LLMs', position: 'top-1/3 left-2', color: 'bg-gradient-to-r from-secondary/80 to-secondary/60', delay: 1 },
                  { text: 'FastAPI', position: 'bottom-20 left-6', color: 'bg-gradient-to-r from-primary/80 to-primary/60', delay: 1.5 },
                  { text: 'Data Science', position: 'bottom-6 right-6', color: 'bg-gradient-to-r from-accent/80 to-accent/60', delay: 2 },
                  { text: 'VectorDB', position: 'top-1/2 right-4', color: 'bg-gradient-to-r from-secondary/80 to-secondary/60', delay: 2.5 },
                  { text: 'MongoDB', position: 'bottom-1/3 left-8', color: 'bg-gradient-to-r from-primary/80 to-primary/60', delay: 3 },
                  { text: 'Flask', position: 'top-20 left-20', color: 'bg-gradient-to-r from-accent/80 to-accent/60', delay: 3.5 }
                ].map((badge, index) => (
                  <Badge
                    key={index}
                    className={`absolute ${badge.position} ${badge.color} backdrop-blur-md border border-white/30 animate-float shadow-xl hover:scale-110 transition-all duration-500 text-white font-medium text-xs px-3 py-1.5 rounded-full`}
                    style={{ 
                      animationDelay: `${badge.delay}s`,
                      animationDuration: `${5 + Math.random() * 3}s`,
                      boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)'
                    }}
                  >
                    {badge.text}
                  </Badge>
                ))}
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
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse"
                    style={{
                      left: `${20 + (i * 60 / 8)}%`,
                      top: `${Math.sin(i) * 20 + 50}%`,
                      transform: `rotate(${i * 45}deg)`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;