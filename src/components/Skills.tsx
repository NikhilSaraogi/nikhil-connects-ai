import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Brain, Wrench, GraduationCap, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 95, color: 'bg-green-500' },
        { name: 'Java', level: 85, color: 'bg-orange-500' },
        { name: 'C++', level: 80, color: 'bg-blue-600' },
        { name: 'SQL', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 75, color: 'bg-yellow-500' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: 'Large Language Models', level: 90, color: 'bg-primary' },
        { name: 'Deep Learning', level: 85, color: 'bg-purple-500' },
        { name: 'Time Series Analysis', level: 90, color: 'bg-green-600' },
        { name: 'Computer Vision', level: 80, color: 'bg-pink-500' },
        { name: 'MLOps', level: 85, color: 'bg-indigo-500' }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'MongoDB', level: 90, color: 'bg-green-500' },
        { name: 'Redis', level: 85, color: 'bg-red-500' },
        { name: 'ChromaDB', level: 85, color: 'bg-blue-400' },
        { name: 'Qdrant', level: 80, color: 'bg-purple-400' },
        { name: 'PostgreSQL', level: 85, color: 'bg-blue-600' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'FastAPI', level: 95, color: 'bg-green-400' },
        { name: 'Flask', level: 85, color: 'bg-blue-500' },
        { name: 'React', level: 70, color: 'bg-cyan-400' },
        { name: 'Pandas', level: 95, color: 'bg-purple-600' },
        { name: 'Scikit-learn', level: 90, color: 'bg-orange-500' }
      ]
    },
    {
      title: 'Specialized Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: 'MQTT', level: 90, color: 'bg-green-500' },
        { name: 'Vector Databases', level: 85, color: 'bg-primary' },
        { name: 'Grafana', level: 85, color: 'bg-orange-600' },
        { name: 'Docker', level: 80, color: 'bg-blue-500' },
        { name: 'Git', level: 90, color: 'bg-gray-600' }
      ]
    },
    {
      title: 'Domain Knowledge',
      icon: <GraduationCap className="w-6 h-6" />,
      skills: [
        { name: 'Power Plant Operations', level: 95, color: 'bg-yellow-600' },
        { name: 'Industrial IoT', level: 90, color: 'bg-blue-500' },
        { name: 'Agentic AI Systems', level: 85, color: 'bg-primary' },
        { name: 'Data Engineering', level: 90, color: 'bg-green-500' },
        { name: 'Model Context Protocol', level: 85, color: 'bg-purple-500' }
      ]
    }
  ];

  const achievements = [
    'Rs. 6.5 Cr+ total cost savings delivered through AI solutions',
    '60% reduction in unplanned power plant outages',
    '40% improvement in boiler efficiency systems',
    '99%+ data quality in industrial analytics pipelines',
    '15+ engineers trained in data science methodologies'
  ];

  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-cyber bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Specialized in AI, Data Science, and Industrial Applications
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
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                      style={{ 
                        '--progress-foreground': `hsl(var(--primary))` 
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
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
              'Python', 'FastAPI', 'LLMs', 'Vector DBs', 'MongoDB', 'Redis', 
              'Machine Learning', 'Deep Learning', 'MQTT', 'Grafana', 
              'Data Science', 'MLOps', 'Industrial IoT', 'Agentic AI'
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