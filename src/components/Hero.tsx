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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden ai-background">
      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-network">
        {/* AI Data Nodes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-3 h-3 bg-primary rounded-full animate-pulse"
            style={{
              left: `${10 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
            }}
          >
            {/* Connection lines */}
            {i < 11 && (
              <div 
                className="absolute top-1/2 left-full w-16 h-px bg-gradient-to-r from-primary/60 to-transparent"
                style={{
                  transform: `translateY(-50%) rotate(${Math.random() * 60 - 30}deg)`,
                  transformOrigin: 'left center'
                }}
              />
            )}
          </div>
        ))}
        
        {/* Floating AI particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-cyber rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium animate-pulse">🤖 Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-cyber to-accent bg-clip-text text-transparent relative">
                Nikhil Saraogi
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-cyber/20 to-accent/20 blur-xl -z-10 animate-pulse"></div>
              </h1>
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <div className="data-stream px-4 py-2 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm">
                  <span className="text-2xl lg:text-3xl text-foreground font-medium">
                    {displayText}
                    <span className="animate-pulse ml-1 text-primary">▋</span>
                  </span>
                </div>
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
              <Button variant="default" size="lg" className="ai-card glow-primary" asChild>
                <a href="https://github.com/NikhilSaraogi" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    🚀 View Projects
                  </span>
                </a>
              </Button>
              <Button variant="outline" size="lg" className="ai-card hover:glow-accent" asChild>
                <a href="https://drive.google.com/file/d/1M3DlqNXsKOafchLmyF6iKei8NJAQIYHe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  📄 Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="ai-card hover:glow-cyber" asChild>
                <a href="mailto:nikhilsarawgi9616@gmail.com">
                  💼 Hire Me
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="ai-card hover:glow-primary transition-smooth" asChild>
                <a href="https://github.com/NikhilSaraogi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="ai-card hover:glow-accent transition-smooth" asChild>
                <a href="https://www.linkedin.com/in/nikhilsaraogi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="ai-card hover:glow-cyber transition-smooth" asChild>
                <a href="mailto:nikhilsarawgi9616@gmail.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - AI Neural Profile Display */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* AI Orb Background */}
              <div className="absolute inset-0 ai-orb" />
              
              {/* Circuit Board Pattern */}
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`circuit-${i}`}
                    className="absolute bg-primary/30 rounded-full animate-pulse"
                    style={{
                      width: `${8 + i * 4}px`,
                      height: `${8 + i * 4}px`,
                      left: `${30 + (i % 3) * 20}%`,
                      top: `${25 + Math.floor(i / 3) * 25}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Neural Network Connections */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`connection-${i}`}
                    className="absolute w-px bg-gradient-to-b from-primary/60 via-cyber/40 to-transparent"
                    style={{
                      height: '60px',
                      left: `${20 + i * 10}%`,
                      top: `${20 + (i % 2) * 40}%`,
                      transform: `rotate(${i * 45}deg)`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>

              {/* Central AI Profile Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-52 h-52 ai-card rounded-full flex items-center justify-center backdrop-blur-md border-2 border-primary/30 shadow-2xl transition-all duration-500 hover:border-cyber/50 animate-neural-glow">
                  {/* Profile Picture with AI Enhancement */}
                  <div className="w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-card to-muted border-2 border-primary/20 flex items-center justify-center relative">
                    <img 
                      src="/pic.jpeg"
                      alt="Nikhil Saraogi - AI Developer"
                      className="w-full h-full object-cover rounded-full"
                    />
                    
                    {/* AI Scanning Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/20 to-transparent animate-pulse rounded-full"></div>
                    <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-pulse"></div>
                    
                    {/* Data Stream Overlay */}
                    <div className="absolute inset-0 data-stream rounded-full opacity-30"></div>
                  </div>
                  
                  {/* AI Status Indicator */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
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