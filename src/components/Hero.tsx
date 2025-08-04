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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Simple animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
            <div className="space-y-4">
              <p className="text-primary text-lg font-medium">🤖 Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-cyber to-accent bg-clip-text text-transparent">
                Nikhil Saraogi
              </h1>
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <div className="px-4 py-2 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm">
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
              <Button variant="default" size="lg" className="glow-primary" asChild>
                <a href="https://github.com/NikhilSaraogi" target="_blank" rel="noopener noreferrer">
                  🚀 View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:glow-accent transition-smooth" asChild>
                <a href="https://drive.google.com/file/d/1M3DlqNXsKOafchLmyF6iKei8NJAQIYHe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  📄 Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:glow-cyber transition-smooth" asChild>
                <a href="mailto:nikhilsarawgi9616@gmail.com">
                  💼 Hire Me
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

          {/* Right side - Clean Profile Display */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              {/* Simple glowing orb background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-cyber/20 rounded-full animate-pulse-glow" />
              
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

              {/* Central profile area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary/40 shadow-2xl hover:border-accent/40 transition-all duration-300">
                  {/* Profile Picture Container */}
                  <div className="w-44 h-44 rounded-full overflow-hidden bg-gradient-to-br from-card to-muted border-2 border-border/30 flex items-center justify-center relative">
                    <img 
                      src="/pic.jpeg"
                      alt="Nikhil Saraogi - AI Developer"
                      className="w-full h-full object-cover rounded-full"
                    />
                    
                    {/* Simple scanning overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse rounded-full"></div>
                  </div>
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