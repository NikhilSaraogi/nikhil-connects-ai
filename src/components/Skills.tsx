import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench, Globe, GraduationCap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend & Systems',
      icon: <Code className="w-6 h-6" />,
      skills: [
        'Python', "OOP's", 'REST APIs', 'Asynchronous Programming', 'WebSockets',
        'Multithreading', 'Microservices Architecture', 'Concurrency Control',
        'Distributed Systems Fundamentals'
      ]
    },
    {
      title: 'AI & Data Systems',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        'Machine Learning', 'Time-Series Modeling', 'Deep Learning', 'Embeddings',
        'Semantic Search', 'Agentic LLM Systems', 'RAG Architecture',
        'MCP (Model Context Protocol)', 'Google ADK', 'Ollama'
      ]
    },
    {
      title: 'Databases & Streaming',
      icon: <Database className="w-6 h-6" />,
      skills: [
        'MongoDB (NoSQL)', 'Redis', 'MQTT', 'ETL',
        'Vector Databases (Qdrant, ChromaDB)'
      ]
    },
    {
      title: 'Web & Frameworks',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        'FastAPI', 'Django', 'Flask', 'Streamlit', 'HTML'
      ]
    },
    {
      title: 'IDE & Tools',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        'Git', 'Docker (Basic)', 'Postman', 'Jupyter', 'Colab',
        'Grafana', 'Antigravity', 'Gemini/Quen CLI'
      ]
    },
    {
      title: 'Domain Expertise',
      icon: <GraduationCap className="w-6 h-6" />,
      skills: [
        'Oil & Gas / Power Plants', 'Industrial IoT', 'Predictive Maintenance',
        'Agent Orchestration Systems', 'Voice AI Systems (Learning)'
      ]
    }
  ];

  const achievements = [
    '₹6.5 Cr+ total cost savings delivered through AI & backend solutions',
    '60% reduction in unplanned power plant outages',
    '40% improvement in boiler efficiency systems',
    '99%+ data reliability in industrial analytics pipelines',
    '15+ engineers mentored in AI and backend architecture'
  ];

  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-cyber bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Backend Engineering, AI Systems & Industrial Applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:glow-primary transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="outline"
                      className="hover:bg-primary/10 hover:border-primary/50 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="animate-fade-in-up">
          <Card className="gradient-card border-border/50 hover:glow-accent transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-accent">
                Key Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {achievements.slice(0, 3).map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {achievements.slice(3).map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16 text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-8 text-cyber">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'FastAPI', 'Django', 'LLMs', 'Google ADK', 'RAG',
              'MongoDB', 'Redis', 'Qdrant', 'MQTT', 'Grafana', 
              'Microservices', 'Agentic AI', 'Industrial IoT', 'MCP'
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm hover:glow-cyber transition-all cursor-default animate-fade-in-up border-cyber/30 text-cyber"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
