import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Projects() {
  const projects = [
    {
      title: "Forge Fitness",
      description: "Full-stack fitness tracking application built with React and modern web technologies. Features comprehensive workout planning, progress tracking, and personalized fitness goals with an intuitive user interface.",
      highlights: [
        "Interactive workout tracking with real-time progress monitoring",
        "Responsive design optimized for mobile and desktop experiences",
        "User-friendly interface with smooth animations and transitions"
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      liveUrl: "https://forge-fitness-sigma.vercel.app",
      githubUrl: "https://github.com/anuroopjajoba3/forge-fitness.git",
      image: "https://images.unsplash.com/photo-1760031670160-4da44e9596d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwd29ya291dCUyMGVxdWlwbWVudCUyMG1vZGVybnxlbnwxfHx8fDE3NzA2OTI5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Campus Parking Predictor",
      description: "Full-stack application with Python/Flask REST API backend and React/JavaScript frontend. Designed PostgreSQL database with optimized queries.",
      highlights: [
        "Built Python/Flask REST API backend with React/JavaScript frontend",
        "Implemented user authentication, data validation, and error handling",
        "Deployed to AWS with Docker; wrote comprehensive tests and debugged issues",
        "Collaborated with team on pull requests and code reviews"
      ],
      tags: ["Flask", "Python", "PostgreSQL", "React", "AWS", "Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/anuroopjajoba3/campus-parking-predictor.git",
      image: "https://images.unsplash.com/photo-1760553120209-8e9d5d2493e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJraW5nJTIwbG90JTIwdGVjaG5vbG9neSUyMHNtYXJ0JTIwY2l0eXxlbnwxfHx8fDE3NzA2OTI5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "MarketPulse AI",
      description: "Full-stack microservices system with Python/Flask and Node.js/Express backends. Created React frontend with responsive UI and MySQL database.",
      highlights: [
        "Developed microservices with Python/Flask and Node.js/Express backends",
        "Designed MySQL database; built REST APIs for data processing",
        "Implemented CI/CD pipeline with GitHub Actions and Docker",
        "Integrated basic machine learning models; wrote unit and integration tests; participated in agile sprints"
      ],
      tags: ["Python", "Flask", "Node.js", "React", "MySQL", "Docker", "CI/CD"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXQlMjBkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDB8fHx8MTczOTk5MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Virtual Try-On Experience",
      description: "Responsive web application built with React/JavaScript frontend using HTML5 and CSS3. Integrated REST APIs with error handling.",
      highlights: [
        "Built responsive React/JavaScript frontend with HTML5 and CSS3",
        "Integrated REST APIs with comprehensive error handling",
        "Implemented debugging techniques to resolve issues",
        "Improved code quality through testing and code reviews"
      ],
      tags: ["React", "JavaScript", "HTML5", "CSS3", "RESTful APIs"],
      liveUrl: "https://virtual-try-on-experience-2.vercel.app",
      githubUrl: "https://github.com/anuroopjajoba3/Virtual-tryon-AI-Powered-Fashion-E-Commerce-Platform.git",
      image: "https://images.unsplash.com/photo-1699636312908-6ac7d3eb2956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwdGVjaG5vbG9neSUyMHZpcnR1YWwlMjByZWFsaXR5JTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwNjkyOTY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "NECHECker Application",
      description: "Full-stack application using Python/Flask backend and modern web frontend. Built REST APIs and database schemas with 19 feature modules achieving 89.1% accuracy.",
      highlights: [
        "Wrote clean, maintainable code with unit tests and integration tests",
        "Used Git/GitHub for version control; participated in code reviews and Agile/SCRUM team",
        "Deployed using Docker containerization and CI/CD pipelines to cloud environments",
        "Integrated generative AI (Gemini API) and worked with vector databases"
      ],
      tags: ["Python", "Flask", "Docker", "CI/CD", "RESTful APIs", "GenAI"],
      liveUrl: "https://wildcatcher-syllabus-checker.onrender.com",
      githubUrl: "https://github.com/anuroopjajoba3/WILDCATCHER-SYLLABUS-CHECKER.git",
      image: "https://images.unsplash.com/photo-1628489823345-3243ad97028c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWxsYWJ1cyUyMGRvY3VtZW50cyUyMGFjYWRlbWljJTIwY29tcGxpYW5jZSUyMGNoZWNraW5nfGVufDF8fHx8MTc3MDY5MzAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  // Neural network particles for background
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }))
  );

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#0a0520] to-[#0f0f0f] text-white py-20 px-4 relative overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: "radial-gradient(circle, rgba(14, 165, 233, 0.6), rgba(139, 92, 246, 0.6))",
              boxShadow: "0 0 10px rgba(14, 165, 233, 0.4)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-500/30 rounded-full text-sm text-sky-400 font-mono">
                model.predict()
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Full-stack applications showcasing modern development practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <Card className="flex flex-col h-full w-full bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0520]/80 border-sky-500/20 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20 overflow-hidden group backdrop-blur-sm">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="h-full"
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 flex-1">
                    <div>
                      <p className="text-xs font-semibold text-sky-400 mb-2 font-mono">// Key Highlights</p>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex gap-2">
                            <span className="text-sky-500 font-bold mt-0.5">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-sky-500/30 text-sky-400 bg-sky-500/5 hover:bg-sky-500/10 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2 mt-auto">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors group/link"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span className="text-xs font-medium">Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                      >
                        <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span className="text-xs font-medium">View Code</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}