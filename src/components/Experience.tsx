import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Engineer | Data Scientist',
      company: 'ExactSpace Technologies Pvt. Ltd.',
      companyUrl: 'https://exactspace.co/',
      location: 'Bengaluru, India',
      period: 'June 2023 — Present',
      type: 'Full-time',
      achievements: [
        'Served as a 0→1 backend architect for industrial AI platforms—designed and productionized scalable microservices powering real-time analytics across multiple power plants; improved enterprise onboarding velocity by 40%.',
        'Architected distributed data ingestion pipelines processing high-frequency telemetry via MQTT and streaming workflows; implemented rigorous validation and metadata harmonization frameworks achieving >99% data reliability for mission-critical decision systems.',
        'Designed and deployed a proprietary Boiler Health Scoring Engine combining statistical modeling and domain-specific physics models; reduced tube leak incidents by 40%, generating ₹2 Cr annual cost savings.',
        'Architected and deployed custom Grafana dashboards and automated alarm systems; integrated MQTT for early voice alerts—reduced mean time to detect critical failures by 50% and enabled real-time KPI monitoring.',
        'Led applied research for Adani Power—developed the Vacuum Saving Model and HP Heater Optimization system using hybrid ML/physics-based models; saved ₹4.5 Cr annually.',
        'Developed time-series forecasting, clustering, and regression models to optimize anode performance for enterprise manufacturing clients; reduced anode rejection rates by 30% and increased density by 25%.',
        'Mentored 15+ engineers and business stakeholders in applied AI, backend architecture, and data-driven decision systems—accelerating adoption of AI-first engineering practices across teams.',
        'Integrated an agentic LLM framework into the core product using Google ADK; architected multi-agent orchestration workflows (Analysis Agent, Discovery Agent, Task Agent) enabling modular, tool-augmented reasoning across industrial datasets.',
        'Leading development of the next-generation Clarity Engine for air-gapped Oil & Gas environments—designing offline-first AI infrastructure using Google ADK; building secure, locally hosted agents capable of operating in fully isolated industrial networks.',
        'Architected a production-grade RAG pipeline for automated DCS/SCADA tag standardization—implemented semantic embedding workflows using Sentence Transformers and Qdrant vector storage to map raw control-system tags to a structured meta-dictionary with high semantic accuracy.',
        'Developed a document-based Question-Answering system leveraging vector embeddings and retrieval orchestration—enabled contextual knowledge extraction from technical manuals, SOPs, and plant documentation for real-time operational intelligence.'
      ],
      techStack: [
        'Python', 'FastAPI', 'Django', 'REST APIs', 'Microservices', 'MQTT',
        'MongoDB', 'Redis', 'Qdrant', 'ChromaDB', 'Google ADK',
        'LLMs', 'RAG', 'Agentic AI', 'Grafana', 'Docker'
      ]
    },
    {
      title: 'Data Science Intern',
      company: 'ExactSpace Technologies Pvt. Ltd.',
      companyUrl: 'https://exactspace.co/',
      location: 'Bengaluru, India',
      period: 'Aug 2022 — May 2023',
      type: 'Internship',
      achievements: [
        'Engineered real-time anomaly detection pipelines integrating PLC, SCADA, and sensor streams via MQTT; enabled proactive asset monitoring across plants.',
        'Designed predictive ML models using advanced time-series feature engineering and supervised learning to detect early equipment degradation.',
        'Automated multi-plant reporting infrastructure (Python, Pandas); reduced manual effort by 50% via programmatic PDF/Excel generation.'
      ],
      techStack: [
        'Python', 'MQTT', 'Time Series Analysis', 'Machine Learning', 
        'Pandas', 'Scikit-learn', 'Industrial IoT'
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
      degree: "Bachelor's in Computer Application (BCA)",
      institution: 'Jiwaji University',
      location: 'Gwalior, Madhya Pradesh',
      period: 'June 2020',
      grade: '8.38 CGPA'
    },
    {
      degree: 'Higher Secondary Education',
      institution: "St. Mary's Inter College",
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
              Building backend systems & AI solutions for industrial applications
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
                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          {exp.company}
                        </a>
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
