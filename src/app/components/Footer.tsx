import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0a0a0a] via-[#0f0520] to-[#0a0a0a] border-t border-sky-500/20 text-white py-8 px-4 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center">
          {/* Social Links */}
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/anuroopjajoba3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-sky-400" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anuroop-jajoba-4487031a2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-sky-400" />
            </motion.a>
            <motion.a
              href="mailto:anuroopjajoba28@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-sky-400" />
            </motion.a>
            <motion.a
              href="tel:+16036748794"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-sky-500/30 flex items-center justify-center hover:from-sky-500/40 hover:to-purple-500/40 transition-all"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-sky-400" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}