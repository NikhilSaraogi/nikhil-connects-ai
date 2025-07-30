import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code2, Database, Zap, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Expert in LLMs, transformers, and agentic workflows with practical industrial applications"
    },
    {
      icon: Code2,
      title: "Full-Stack Development", 
      description: "Python, FastAPI, React with microservices architecture and distributed computing"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Vector databases, MongoDB, Redis with real-time data pipelines and analytics"
    },
    {
      icon: Zap,
      title: "Industrial IoT",
      description: "MQTT, SCADA integration, predictive maintenance for power plants and manufacturing"
    }
  ];

  const achievements = [
    { metric: "Rs. 6.5 Cr+", label: "Annual Cost Savings Delivered" },
    { metric: "60%", label: "Reduction in Unplanned Outages" },
    { metric: "99%+", label: "Data Quality Achieved" },
    { metric: "15+", label: "Engineers Trained" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-cyber bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate <span className="text-primary font-semibold">Data Scientist and AI Engineer</span> at ExactSpace Technologies, 
                where I architect next-generation industrial AI solutions. With expertise spanning from 
                <span className="text-accent font-semibold"> LLMs and transformers</span> to 
                <span className="text-cyber font-semibold"> real-time IoT systems</span>, I bridge the gap between 
                cutting-edge AI research and practical industrial applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My work involves developing <span className="text-primary font-semibold">agentic AI systems</span>, 
                building scalable data pipelines, and creating intelligent monitoring solutions that have delivered 
                significant cost savings and operational improvements across power plants and manufacturing facilities.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card 
                  key={index}
                  className="group hover:glow-primary transition-all duration-300 gradient-card border-border/50 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Achievements Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Impact & Achievements
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="text-center hover:glow-accent transition-all duration-300 gradient-card border-border/50 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {achievement.metric}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <Card className="gradient-card border-border/50 hover:glow-cyber transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyber/20 to-primary/20 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-cyber" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyber to-primary bg-clip-text text-transparent">
                    Current Focus: Agentic AI & LLM Systems
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm currently pioneering the development of <span className="text-cyber font-semibold">Clarity Engine</span> - 
                    an advanced agentic LLM system using Model Context Protocol (MCP) and transformer-based RAG architecture. 
                    This system enables secure, real-time natural language interactions with complex industrial data.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['MCP (Model Context Protocol)', 'Transformer RAG', 'Vector Databases', 'Agentic Workflows', 'Industrial AI'].map((tech) => (
                      <Badge key={tech} variant="outline" className="hover:bg-cyber/10 hover:border-cyber/50 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;