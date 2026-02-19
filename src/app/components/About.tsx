import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Neural network nodes
  const [nodes] = useState(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }))
  );

  // Generate connections between nearby nodes
  const [connections] = useState(() => {
    const conns: Array<{from: typeof nodes[0], to: typeof nodes[0]}> = [];
    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach(otherNode => {
        const distance = Math.sqrt(
          Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
        );
        if (distance < 25 && Math.random() > 0.7) {
          conns.push({ from: node, to: otherNode });
        }
      });
    });
    return conns;
  });

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0520] to-[#0a0a0a] text-white relative py-20 overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((conn, i) => (
            <motion.line
              key={i}
              x1={`${conn.from.x}%`}
              y1={`${conn.from.y}%`}
              x2={`${conn.to.x}%`}
              y2={`${conn.to.y}%`}
              stroke="url(#gradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2,
                delay: i * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              background: "radial-gradient(circle, rgba(14, 165, 233, 0.8), rgba(139, 92, 246, 0.8))",
              boxShadow: "0 0 10px rgba(14, 165, 233, 0.5)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: node.duration,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-500/5 via-transparent to-purple-500/5 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-500/30 rounded-full text-sm text-sky-400 font-mono">
                Software & AI Engineer
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
              Hello,
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Anuroop
              </span> here! 👋
            </h1>

            <div className="text-lg md:text-xl text-gray-300 space-y-4 mb-8">
              <p className="leading-relaxed">
                I'm a <span className="text-transparent bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text font-semibold">Software & AI Engineer</span> with 1+ years of experience, built through high-impact internships and deploying scalable intelligent systems.
              </p>
              <p className="leading-relaxed">
                I work across <span className="text-transparent bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text font-semibold">Full-Stack Development</span>, RAG / Vector Databases, Predictive Modeling, React, Python (FastAPI/Flask), GenAI Integration, and Cloud DevOps from architecture design to production deployment.
              </p>
              <p className="leading-relaxed">
                I completed my Master's in IT at the University of New Hampshire and I'm focused on building robust, production-ready applications.
              </p>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <a href="https://github.com/anuroopjajoba3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all hover:scale-110">
                <Github className="w-5 h-5 text-sky-400" />
              </a>
              <a href="https://www.linkedin.com/in/anuroop-jajoba-4487031a2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5 text-sky-400" />
              </a>
              <a href="mailto:anuroopjajoba28@gmail.com" className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all hover:scale-110">
                <Mail className="w-5 h-5 text-sky-400" />
              </a>
              <a href="tel:+16036748794" className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all hover:scale-110">
                <Phone className="w-5 h-5 text-sky-400" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-full px-8 border-0 shadow-lg shadow-sky-500/50 hover:shadow-sky-500/70 transition-all hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-sky-500/50 text-sky-400 hover:bg-sky-500/10 hover:border-sky-500 rounded-full px-8 backdrop-blur-sm transition-all hover:scale-105"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </Button>
            </div>
          </motion.div>

          {/* Right side - Photo with ML visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Orbiting elements */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full bg-sky-500 shadow-lg shadow-sky-500/50" />
                <div className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
              </motion.div>
              
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-1/2 left-0 w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                <div className="absolute top-1/2 right-0 w-2 h-2 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
              </motion.div>

              <div className="w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden border-4 border-sky-500/30 shadow-2xl shadow-sky-500/20 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 z-10 pointer-events-none" />
                <img
                  src="/profile.jpg"
                  alt="Anuroop Jajoba"
                  className="w-full h-full object-cover relative z-0"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
                  }}
                />
              </div>
              
              {/* Glowing corners */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-sky-500 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="w-6 h-6 text-sky-400" />
          <span className="text-xs text-sky-400/70 font-mono">scroll_down()</span>
        </div>
      </motion.div>
    </section>
  );
}