import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist',
      company: 'ExactSpace Technologies Pvt. Ltd.',
      location: 'Bengaluru, India',
      period: 'June 2023 — Present',
      type: 'Full-time',
      achievements: [
        'Led end-to-end product onboarding for power plants—architected scalable backend services and UIs using Python, and REST APIs; improved onboarding speed by 40%.',
        'Developed high-performance Python microservices leveraging distributed computing for real-time Boiler & Turbine Efficiency—reduced unplanned outages by 60%.',
        'Engineered robust data integration pipelines to harmonize OPC tag metadata and telemetry; ensured >99% data quality for analytics with advanced validation.',
        'Designed the Boiler Manager module with proprietary health-scoring (statistical algorithms); reduced tube leakages by 40% and delivered Rs. 2 Cr annual cost savings.',
        'Built ML models (time series, clustering, GLM) to drive anode optimization for Aditya Birla Group; reduced anode rejection rates by 30% through early defect detection.',
        'Spearheaded Clarity Engine: built agentic LLM-powered chatbot using MCP, Transformer-based RAG, vector DB\'s; enabled secure, real-time natural-language Q&A over plant data.'
      ],
      techStack: [
        'Python', 'FastAPI', 'Machine Learning', 'LLMs', 'Vector Databases', 
        'MongoDB', 'Redis', 'MQTT', 'Grafana', 'Data Science'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'ExactSpace Technologies Pvt. Ltd.',
      location: 'Bengaluru, India',
      period: 'Aug 2022 — May 2023',
      type: 'Internship',
      achievements: [
        'Developed real-time anomaly detection with Mosquitto, MQTT, and Python—enabling proactive maintenance across plants.',
        'Prototyped MQTT edge solutions for condition monitoring; unified PLC, sensor, and SCADA data streams efficiently.',
        'Applied advanced analytics—time series decomposition, feature engineering, supervised ML—to predict and prevent failures.',
        'Automated multi-plant reporting (Python, Pandas, FPDF2); reduced manual reporting by 50% via smart PDF/Excel generation.'
      ],
      techStack: [
        'Python', 'MQTT', 'Time Series Analysis', 'Machine Learning', 
        'Pandas', 'Data Analytics', 'Industrial IoT'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master of Computer Application (MCA)',
      institution: 'Vellore Institute of Technology',
      location: 'Chennai, Tamil Nadu',
      period: 'May 2023',
      grade: '9.54 CGPA',
      achievement: 'Meritorious Award (3rd Rank) for Academic Achievement'
    },
    {
      degree: 'Bachelor\'s in Computer Application (BCA)',
      institution: 'Jiwaji University',
      location: 'Gwalior, Madhya Pradesh',
      period: 'June 2020',
      grade: '8.38 CGPA'
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'St. Mary\'s Inter College',
      location: 'Jhansi (U.P. Board)',
      period: 'June 2017',
      grade: '85.3%'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-lg">
              Building AI solutions and driving innovation in industrial applications
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="gradient-card border-border/50 hover:glow-primary transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg mt-1">
                        <Building className="w-4 h-4" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 text-cyber">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="hover:glow-accent transition-all cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-cyber bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-muted-foreground text-lg">
              Academic foundation in computer science and applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="gradient-card border-border/50 hover:glow-accent transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-accent">{edu.degree}</CardTitle>
                  <CardDescription className="text-base">{edu.institution}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      {edu.grade}
                    </Badge>
                  </div>
                  {edu.achievement && (
                    <div className="mt-3 p-3 bg-accent/10 rounded-md border border-accent/20">
                      <p className="text-sm text-accent font-medium">{edu.achievement}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;