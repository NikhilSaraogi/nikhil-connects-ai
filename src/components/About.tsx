import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Code2, Database, Zap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Engineering",
      description: "0→1 backend architect — Python, FastAPI, Django, microservices, REST APIs, WebSockets, and distributed systems"
    },
    {
      icon: Brain,
      title: "AI & Agentic Systems", 
      description: "Agentic LLM systems, RAG architecture, Google ADK, MCP, semantic search, and multi-agent orchestration"
    },
    {
      icon: Database,
      title: "Data & Streaming",
      description: "MongoDB, Redis, Qdrant, ChromaDB, MQTT streaming, ETL pipelines, and real-time telemetry processing"
    },
    {
      icon: Zap,
      title: "Industrial IoT & Domain",
      description: "Power plants, Oil & Gas, predictive maintenance, SCADA/DCS integration, and Grafana monitoring"
    }
  ];

  const achievements = [
    { metric: "₹6.5 Cr+", label: "Annual Cost Savings Delivered" },
    { metric: "60%", label: "Reduction in Unplanned Outages" },
    { metric: "99%+", label: "Data Reliability Achieved" },
    { metric: "15+", label: "Engineers Mentored" }
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
                I'm a <span className="text-primary font-semibold">Backend Engineer & Data Scientist</span> at ExactSpace Technologies, 
                with a deep love for exploring AI. From designing 
                <span className="text-accent font-semibold"> scalable microservices and distributed systems</span> to building 
                <span className="text-cyber font-semibold"> agentic LLM workflows</span>, I thrive at the intersection of 
                backend engineering and artificial intelligence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A <span className="text-primary font-semibold">learning enthusiast</span> at heart — I'm always exploring new technologies, 
                whether it's Voice AI systems, offline-first AI infrastructure for air-gapped environments, 
                or multi-agent orchestration with Google ADK. I believe in turning complex industrial problems 
                into elegant, production-ready solutions.
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
                    Currently Exploring: Agentic AI & Offline-First Systems
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Leading development of the next-generation <span className="text-cyber font-semibold">Clarity Engine</span> for 
                    air-gapped Oil & Gas environments — designing offline-first AI infrastructure using Google ADK, 
                    building secure, locally hosted agents with Ollama capable of operating in fully isolated industrial networks.
                    Also exploring <span className="text-primary font-semibold">Voice AI Systems</span> as the next frontier.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Google ADK', 'Agentic Workflows', 'Ollama', 'RAG Pipeline', 'Voice AI (Learning)', 'Air-gapped AI'].map((tech) => (
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
