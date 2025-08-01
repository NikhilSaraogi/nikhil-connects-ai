import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden artistic-bg">
      {/* Enhanced Artistic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles with artistic variations */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute rounded-full floating-element ${
              i % 3 === 0 ? 'w-2 h-2 bg-primary' : 
              i % 3 === 1 ? 'w-1 h-1 bg-accent' : 
              'w-3 h-3 bg-cyber/50'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Artistic morphing blobs */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`blob-${i}`}
            className={`absolute morphing-blob opacity-10 ${
              i === 0 ? 'w-96 h-96 bg-primary' :
              i === 1 ? 'w-80 h-80 bg-accent' :
              'w-72 h-72 bg-cyber'
            }`}
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 2}s`,
              filter: 'blur(40px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in-left">
            <div className="space-y-2">
              <p className="text-primary text-lg font-medium floating-element">✨ Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-cyber bg-clip-text text-transparent relative">
                <span className="text-glitch" data-text="Nikhil Saraogi">
                  Nikhil Saraogi
                </span>
              </h1>
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <span className="text-2xl lg:text-3xl text-muted-foreground rainbow-border p-2 rounded-lg">
                  {displayText}
                  <span className="animate-pulse ml-1 text-accent">|</span>
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
              <Button variant="default" size="lg" className="glow-primary rainbow-border floating-element" asChild>
                <a href="https://github.com/NikhilSaraogi" target="_blank" rel="noopener noreferrer">
                  🚀 View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" className="transition-bounce hover:glow-accent artistic-card" asChild>
                <a href="https://drive.google.com/file/d/1M3DlqNXsKOafchLmyF6iKei8NJAQIYHe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  📄 Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="transition-bounce hover:glow-cyber artistic-card" asChild>
                <a href="mailto:nikhilsarawgi9616@gmail.com">
                  💼 Hire Me
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:glow-primary transition-smooth artistic-card floating-element" asChild>
                <a href="https://github.com/NikhilSaraogi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:glow-accent transition-smooth artistic-card floating-element" asChild>
                <a href="https://www.linkedin.com/in/nikhilsaraogi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:glow-cyber transition-smooth artistic-card floating-element" asChild>
                <a href="mailto:nikhilsarawgi9616@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Artistic Profile Display */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* Artistic glowing orb background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-cyber/30 rounded-full animate-pulse-glow morphing-blob" />
              
              {/* Additional artistic elements */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`orbit-${i}`}
                    className="absolute w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full floating-element"
                    style={{
                      left: `${50 + 40 * Math.cos(i * Math.PI / 4)}%`,
                      top: `${50 + 40 * Math.sin(i * Math.PI / 4)}%`,
                      animationDelay: `${i * 0.3}s`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}
              </div>
              
              {/* Tech stack badges floating around */}
              <div className="absolute inset-0">
                {[
                  { text: 'Python', position: 'top-4 left-4', color: 'bg-accent' },
                  { text: 'Data Science', position: 'top-1/4 left-2', color: 'bg-secondary' },
                  { text: 'LLMs', position: 'top-8 right-8', color: 'bg-primary' },
                  { text: 'MCP', position: 'bottom-4 left-48', color: 'bg-cyber' },
                  { text: 'FastAPI', position: 'bottom-12 left-8', color: 'bg-secondary' },
                  { text: 'ML/AI', position: 'bottom-4 right-4', color: 'bg-cyber' },
                  { text: 'MongoDB', position: 'left-4 top-1/2', color: 'bg-accent' },
                  { text: 'MQTT', position: 'top-4 left-40', color: 'bg-accent' },
                  { text: 'Flask', position: 'top-1/2 right-8', color: 'bg-secondary' },
                  { text: 'VectorDB', position: 'right-4 top-1/3', color: 'bg-primary' }
                ].map((badge, index) => (
                  <Badge
                    key={index}
                    className={`absolute ${badge.position} ${badge.color} animate-float`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {badge.text}
                  </Badge>
                ))}
              </div>

              {/* Central artistic profile area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary/40 shadow-2xl hover:border-accent/40 transition-all duration-300 rainbow-border artistic-card">
                  {/* Artistic Profile Picture Container */}
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-gradient-to-br from-card to-muted border-2 border-border/30 flex items-center justify-center relative morphing-blob">
                    {/* Profile image with artistic overlay */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                      <img 
                        src="/pic.jpeg"
                        alt="Nikhil Saraogi - AI Developer"
                        className="w-full h-full object-cover rounded-full"
                      />
                      
                      {/* Artistic scanning overlay effects */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse rounded-full"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/10 to-transparent animate-pulse rounded-full" style={{ animationDelay: '1s' }}></div>
                      
                      {/* Holographic effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyber/5 via-transparent to-primary/5 rounded-full floating-element"></div>
                    </div>
                  </div>
                  
                  {/* Artistic glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-cyber/10 animate-pulse-glow" style={{ filter: 'blur(20px)' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;