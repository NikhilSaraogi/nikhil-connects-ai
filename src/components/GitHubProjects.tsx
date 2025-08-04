import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

const GitHubProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // First try to fetch pinned repositories
        const pinnedResponse = await fetch('https://api.github.com/users/NikhilSaraogi/repos?type=public&sort=updated&per_page=50');
        if (!pinnedResponse.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const allRepos = await pinnedResponse.json();
        
        // Filter for the most relevant repositories (starred, recently updated, with descriptions)
        const filteredRepos = allRepos
          .filter((repo: GitHubRepo) => 
            !repo.name.includes('fork') && 
            repo.description && 
            repo.description.trim() !== ''
          )
          .sort((a: GitHubRepo, b: GitHubRepo) => {
            // Prioritize by stars and recent updates
            const aScore = a.stargazers_count * 2 + (new Date(a.updated_at).getTime() / 1000000000);
            const bScore = b.stargazers_count * 2 + (new Date(b.updated_at).getTime() / 1000000000);
            return bScore - aScore;
          })
          .slice(0, 6);
        
        setRepos(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
    
    // Set up real-time updates every 5 minutes
    const interval = setInterval(fetchRepos, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      Java: 'bg-orange-500',
      'C++': 'bg-blue-600',
      HTML: 'bg-orange-600',
      CSS: 'bg-blue-400',
      Go: 'bg-cyan-500',
      Rust: 'bg-orange-700',
      PHP: 'bg-purple-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Latest Projects
            </h2>
            <p className="text-muted-foreground text-lg">Real-time from my GitHub repository</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse gradient-card border-border/50">
                <CardHeader>
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-muted rounded w-16"></div>
                      <div className="h-6 bg-muted rounded w-16"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Latest Projects
            </h2>
            <p className="text-destructive">Error loading projects: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">Pinned repositories updated in real-time from GitHub</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <Card 
              key={repo.id} 
              className="group hover:glow-primary transition-all duration-300 gradient-card border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {repo.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm">
                      {repo.description}
                    </CardDescription>
                  </div>
                  <Github className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Language and topics */}
                <div className="flex flex-wrap gap-2">
                  {repo.language && (
                    <Badge variant="outline" className={`${getLanguageColor(repo.language)} text-white border-0`}>
                      {repo.language}
                    </Badge>
                  )}
                  {repo.topics.slice(0, 2).map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="flex-1 hover:glow-primary transition-all"
                  >
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {repo.homepage && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="flex-1 hover:glow-accent transition-all"
                    >
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="glow-primary"
          >
            <a href="https://github.com/NikhilSaraogi?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;