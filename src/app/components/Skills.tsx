import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { useState } from "react";

export function Skills() {
  const skillCategories = [
    {
      title: "Front-End Development",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "UI/UX Design"],
      icon: "⚛️",
    },
    {
      title: "Back-End Development",
      skills: ["Python", "Flask", "Node.js", "Express", "RESTful APIs", "Microservices", "API Integration"],
      icon: "🔧",
    },
    {
      title: "Databases & Storage",
      skills: ["MySQL", "PostgreSQL", "ChromaDB", "Vector Databases", "Database Design", "Query Optimization"],
      icon: "🗄️",
    },
    {
      title: "AI & Machine Learning",
      skills: ["Gemini API", "GenAI Integration", "Machine Learning Models", "XGBoost", "scikit-learn", "Pandas", "NumPy"],
      icon: "🤖",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "CI/CD Pipelines", "GitHub Actions", "Render", "Vercel", "Containerization"],
      icon: "☁️",
    },
    {
      title: "Development Tools & Practices",
      skills: ["Git", "GitHub", "Agile/SCRUM", "Unit Testing", "Integration Testing", "Code Reviews", "Debugging"],
      icon: "🛠️",
    },
  ];

  // Data flow particles
  const [dataFlows] = useState(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 5 + 5,
    }))
  );

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0520] to-[#0a0a0a] text-white py-20 px-4 relative overflow-hidden">
      {/* Flowing data lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {dataFlows.map((flow) => (
          <motion.div
            key={flow.id}
            className="absolute w-1 h-20 bg-gradient-to-b from-transparent via-sky-500/50 to-transparent"
            style={{ left: `${flow.x}%`, top: -80 }}
            animate={{
              y: ["0vh", "100vh"],
            }}
            transition={{
              duration: flow.duration,
              delay: flow.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
        
        {/* Circuit pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#0ea5e9" />
              <circle cx="90" cy="90" r="2" fill="#8b5cf6" />
              <line x1="10" y1="10" x2="90" y2="10" stroke="#0ea5e9" strokeWidth="0.5" />
              <line x1="10" y1="10" x2="10" y2="90" stroke="#8b5cf6" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>
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
                tech_stack.load()
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Full-stack expertise from AI integration to cloud deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0520]/80 border border-sky-500/20 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20 backdrop-blur-sm group flex flex-col h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{category.icon}</span>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-sky-500/10 to-purple-500/10 text-gray-300 hover:from-sky-500/20 hover:to-purple-500/20 border border-sky-500/20 hover:border-sky-500/40 transition-all hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}