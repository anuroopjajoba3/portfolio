import { motion } from "motion/react";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "anuroopjajoba28@gmail.com",
      href: "mailto:anuroopjajoba28@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (603) 674-8794",
      href: "tel:+16036748794",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Boston, MA",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/anuroop-jajoba-4487031a2",
      href: "https://www.linkedin.com/in/anuroop-jajoba-4487031a2",
    },
  ];

  // Pulse circles
  const [pulses] = useState(() =>
    Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
  );

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0520] to-[#0a0a0a] text-white py-20 px-4 relative overflow-hidden">
      {/* Animated pulses */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {pulses.map((pulse) => (
          <motion.div
            key={pulse.id}
            className="absolute w-32 h-32 rounded-full"
            style={{
              left: `${pulse.x}%`,
              top: `${pulse.y}%`,
              background: "radial-gradient(circle, rgba(14, 165, 233, 0.1), transparent)",
              border: "1px solid rgba(14, 165, 233, 0.2)",
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 4,
              delay: pulse.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
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
                connect.initialize()
              </span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Let's <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg">
              I'm always open to discussing new projects and opportunities
            </p>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-4 text-center">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-6 text-center">
                Feel free to reach out through any of these channels. I'm currently seeking 
                opportunities in software development and would love to discuss how I can 
                contribute to your team.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-[#1a1a1a]/80 to-[#0f0520]/80 border border-sky-500/20 hover:border-sky-500/50 transition-all backdrop-blur-sm group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-sky-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <div>
                    <p className="text-sm text-sky-400 mb-1 font-mono">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-base text-white hover:text-sky-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base text-white">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-4">
              <a
                href="https://github.com/anuroopjajoba3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5 text-sky-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/anuroop-jajoba-4487031a2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-sky-400" />
              </a>
              <a
                href="mailto:anuroopjajoba28@gmail.com"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5 text-sky-400" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
