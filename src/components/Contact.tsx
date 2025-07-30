import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:nikhilsarawgi9616@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Hi Nikhil,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'nikhilsarawgi9616@gmail.com',
      link: 'mailto:nikhilsarawgi9616@gmail.com',
      color: 'text-primary'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91-8009848257',
      link: 'tel:+918009848257',
      color: 'text-accent'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Bengaluru, India',
      link: '#',
      color: 'text-cyber'
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/NikhilSaraogi',
      color: 'hover:text-primary'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nikhilsaraogi/',
      color: 'hover:text-accent'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: 'Email',
      url: 'mailto:nikhilsarawgi9616@gmail.com',
      color: 'hover:text-cyber'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss AI solutions, data science projects, or collaboration opportunities? 
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="gradient-card border-border/50 hover:glow-primary transition-all duration-300 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={6}
                    className="bg-muted/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" className="w-full glow-primary transition-all">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Contact Details */}
            <Card className="gradient-card border-border/50 hover:glow-accent transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`p-3 bg-muted/50 rounded-lg ${info.color} group-hover:glow-primary transition-all`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <a 
                        href={info.link}
                        className={`font-medium ${info.color} hover:underline transition-colors`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="gradient-card border-border/50 hover:glow-cyber transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-cyber">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                      className={`transition-all duration-300 ${social.color} hover:glow-primary`}
                    >
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    </Button>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-border/30">
                  <p className="text-sm text-muted-foreground">
                    Open to opportunities in AI, Data Science, and ML Engineering. 
                    Available for remote and on-site positions worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="gradient-card border-border/50 border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="font-medium text-accent">Available for new opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Currently exploring exciting roles in AI, LLMs, and Data Science
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;