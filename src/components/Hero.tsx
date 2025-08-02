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
      {/* Artistic floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: i % 3 === 0 ? 'hsl(15 86% 75%)' : i % 3 === 1 ? 'hsl(270 50% 80%)' : 'hsl(160 60% 75%)',
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-in-left">
            <div className="space-y-6">
              <p className="text-primary text-xl font-light tracking-wide">✨ Hello, I'm</p>
              <h1 className="text-6xl lg:text-8xl font-light tracking-tight gradient-sunrise bg-clip-text text-transparent">
                Nikhil Saraogi
              </h1>
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <div className="px-6 py-3 rounded-2xl glass-effect">
                  <span className="text-3xl lg:text-4xl text-foreground font-light tracking-wide">
                    {displayText}
                    <span className="animate-pulse ml-2 text-primary">✦</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Crafting beautiful AI-powered solutions and scalable data science systems. 
              Building the future of industrial AI with elegance and precision.
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
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <Button variant="default" size="lg" className="glow-warm px-8 py-4 rounded-2xl font-light transition-gentle" asChild>
                <a href="https://github.com/NikhilSaraogi" target="_blank" rel="noopener noreferrer">
                  ✨ View Projects
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:glow-cool transition-gentle px-8 py-4 rounded-2xl font-light" asChild>
                <a href="https://drive.google.com/file/d/1M3DlqNXsKOafchLmyF6iKei8NJAQIYHe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  📋 Download CV
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:glow-mint transition-gentle px-8 py-4 rounded-2xl font-light" asChild>
                <a href="mailto:nikhilsarawgi9616@gmail.com">
                  💌 Hire Me
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" className="hover:glow-warm transition-gentle w-12 h-12 rounded-2xl" asChild>
                <a href="https://github.com/NikhilSaraogi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:glow-cool transition-gentle w-12 h-12 rounded-2xl" asChild>
                <a href="https://www.linkedin.com/in/nikhilsaraogi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:glow-mint transition-gentle w-12 h-12 rounded-2xl" asChild>
                <a href="mailto:nikhilsarawgi9616@gmail.com">
                  <Mail className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right side - Artistic Profile Display */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-96 h-96 mx-auto lg:w-[500px] lg:h-[500px]">
              {/* Artistic floating rings */}
              <div className="absolute inset-8 rounded-full border-2 border-primary/20 opacity-60 float-animation" style={{ animationDuration: '8s' }} />
              <div className="absolute inset-16 rounded-full border border-secondary/30 opacity-40 float-animation" style={{ animationDuration: '10s', animationDelay: '2s' }} />
              <div className="absolute inset-24 rounded-full border border-accent/20 opacity-30 float-animation" style={{ animationDuration: '12s', animationDelay: '4s' }} />
              
              {/* Elegant skill badges */}
              <div className="absolute inset-0">
                {[
                  { text: 'Python', position: 'top-8 left-12', color: 'gradient-sunrise' },
                  { text: 'AI/ML', position: 'top-16 right-16', color: 'gradient-ocean' },
                  { text: 'Data Science', position: 'top-1/3 left-4', color: 'gradient-sunrise' },
                  { text: 'LLMs', position: 'top-1/4 right-8', color: 'gradient-ocean' },
                  { text: 'FastAPI', position: 'bottom-20 left-16', color: 'gradient-sunrise' },
                  { text: 'MongoDB', position: 'bottom-16 right-20', color: 'gradient-ocean' },
                  { text: 'Transformers', position: 'left-8 top-1/2', color: 'gradient-sunrise' },
                  { text: 'Vector DB', position: 'right-12 top-1/2', color: 'gradient-ocean' }
                ].map((badge, index) => (
                  <div
                    key={index}
                    className={`absolute ${badge.position} px-4 py-2 rounded-full text-sm font-light glass-effect float-animation shadow-lg`}
                    style={{ animationDelay: `${index * 0.8}s`, animationDuration: '6s' }}
                  >
                    {badge.text}
                  </div>
                ))}
              </div>

              {/* Central artistic profile area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Artistic glow background */}
                  <div className="absolute inset-0 w-64 h-64 gradient-ocean rounded-full opacity-20 blur-xl" />
                  
                  {/* Profile container */}
                  <div className="relative w-56 h-56 rounded-full glass-effect p-2 glow-warm">
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <img 
                        src="/pic.jpeg"
                        alt="Nikhil Saraogi - AI Artist"
                        className="w-full h-full object-cover rounded-full"
                      />
                      
                      {/* Artistic overlay */}
                      <div className="absolute inset-0 rounded-full shimmer opacity-20" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                    </div>
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