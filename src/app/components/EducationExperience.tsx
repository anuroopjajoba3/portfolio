import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";
import { useState } from "react";

export function EducationExperience() {
  const experienceHighlights = [
    "Designed and developed full-stack applications using Python backends and React frontends; built REST APIs and database schemas",
    "Wrote clean, maintainable code following software development best practices; implemented unit tests and integration tests",
    "Used Git and GitHub for version control; participated in code reviews and pull requests; collaborated in Agile/SCRUM team",
    "Deployed applications using Docker containerization and CI/CD pipelines to AWS cloud environments",
    "Integrated generative AI and LLM technologies (Gemini API) into production systems; worked with vector databases",
    "Debugged complex issues and optimized performance; learned new technologies and frameworks rapidly"
  ];

  // Floating particles
  const [particles] = useState(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
    }))
  );

  return (
    <section id="education-experience" className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#0a0520] to-[#0f0f0f] text-white py-20 px-4 relative overflow-hidden">
      {/* Animated background particles */}
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
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(14, 165, 233, 0.6))",
              boxShadow: "0 0 8px rgba(139, 92, 246, 0.4)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
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
                career.timeline()
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Education & <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Academic background and professional journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex"
            >
              <Card className="flex flex-col w-full bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0520]/80 border-sky-500/20 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-sky-500/30 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-7 h-7 text-sky-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-3">
                        Education
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-sky-400 mb-2">
                        University of New Hampshire
                      </h3>
                      <p className="text-lg text-gray-300 mb-3">
                        Master of Science in Information Technology
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-sky-400" />
                          <span className="text-sm">Jan. 2024 – Jan. 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-sky-400" />
                          <span className="text-sm">Manchester, NH</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-sky-500/10 to-purple-500/10 rounded-lg p-4 border border-sky-500/20">
                        <p className="text-lg text-gray-300">
                          <span className="font-semibold text-sky-400">CGPA:</span> 3.63/4.0
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex"
            >
              <Card className="flex flex-col w-full bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0520]/80 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-7 h-7 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3">
                        Experience
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-purple-400 mb-1">
                        Software Developer Intern
                      </h3>
                      <p className="text-lg text-gray-300 mb-3">
                        University of New Hampshire - Team Alpha
                      </p>
                      <div className="flex flex-wrap gap-4 text-gray-400 mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span className="text-sm">Sep. 2025 – Dec. 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span className="text-sm">Manchester, NH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {experienceHighlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 flex-shrink-0 shadow-sm shadow-purple-500/50" />
                        <p className="text-gray-400 text-sm leading-relaxed">{highlight}</p>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}