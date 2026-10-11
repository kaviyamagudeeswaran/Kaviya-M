
import { useState, useEffect } from "react";
import {
  Download,
  MessageCircle,
  Github,
  Linkedin,
  ArrowDownRight,
  Code2,
  Sparkles,
  Braces,
  Terminal,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Frontend Developer",
];

const technologies = ["React", "JavaScript", "Node.js", "MongoDB"];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#080b16] pt-24 text-white"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -right-32 top-40 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-14 px-6 py-16 md:px-10 lg:grid-cols-2 lg:gap-8 lg:py-20">
        {/* LEFT: Intro */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: -45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center lg:text-left"
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            B.Tech IT Graduate · Open to Opportunities
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mb-3 text-lg font-medium tracking-wide text-slate-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl"
          >
            Kaviya{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              M.
            </span>
          </motion.h1>

          {/* Animated job title */}
          <div className="mt-5 flex min-h-12 items-center justify-center lg:justify-start">
            <span className="mr-3 hidden h-8 w-1 rounded-full bg-cyan-400 sm:block" />

            <AnimatePresence mode="wait">
              <motion.h2
                key={ROLES[roleIndex]}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 14, filter: "blur(6px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, y: -12, filter: "blur(4px)" }
                }
                transition={{ duration: 0.4 }}
                className="text-2xl font-semibold text-slate-200 sm:text-3xl md:text-4xl"
              >
                {ROLES[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0"
          >
            I build responsive, user-friendly web applications using React,
            JavaScript, Node.js, and modern database technologies. I enjoy
            turning ideas into practical digital experiences through clean
            code, thoughtful design, and continuous learning.
          </motion.p>

          {/* Tech stack chips */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.04 }}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300 shadow-sm backdrop-blur-sm"
              >
                <span className="mr-2 text-cyan-400">
                  {["◈", "⟨/⟩", "⌘", "◉"][index]}
                </span>
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Call-to-action buttons */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <motion.a
              href="/Kaviya_Resume.pdf"
              download="Kaviya_Resume.pdf"
              whileHover={reduceMotion ? undefined : { scale: 1.04, y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-shadow hover:shadow-blue-500/40"
            >
              <Download size={19} />
              Download Resume
              <ArrowDownRight
                size={17}
                className="transition-transform group-hover:translate-y-1"
              />
            </motion.a>

            <motion.button
              type="button"
              onClick={scrollToContact}
              whileHover={reduceMotion ? undefined : { scale: 1.04, y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-slate-100 backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              <MessageCircle size={19} className="text-cyan-300" />
              Let's Talk
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 flex items-center justify-center gap-5 lg:justify-start"
          >
            <span className="text-sm text-slate-500">Find me on</span>

            <a
              href="https://github.com/kaviyamagudeeswaran"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/kaviya--m/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-white/10 p-2.5 text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Animated profile */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-lg"
        >
          {/* Decorative orbit rings */}
          <motion.div
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[340px] w-[340px] rounded-full border border-dashed border-cyan-300/20 sm:h-[430px] sm:w-[430px]"
          />

          <motion.div
            animate={reduceMotion ? undefined : { rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[290px] w-[290px] rounded-full border border-violet-300/20 sm:h-[370px] sm:w-[370px]"
          >
            <span className="absolute left-8 top-12 h-3 w-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/60" />
            <span className="absolute bottom-10 right-8 h-2.5 w-2.5 rounded-full bg-violet-300 shadow-lg shadow-violet-300/60" />
          </motion.div>

          {/* Main profile image */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -12, 0], rotate: [0, 1, 0] }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-[270px] sm:w-[330px]"
          >
            {/* Glow behind photo */}
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/40 via-blue-500/30 to-violet-500/40 opacity-80 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-slate-800 to-slate-950 p-2 shadow-2xl shadow-blue-950/40">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-900">
                <img
                  src="/kaviya.jpg"
                  alt="Kaviya M, Full Stack Developer"
                  loading="eager"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Bottom gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b16]/95 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                    <Sparkles size={14} />
                    Building the future
                  </div>
                  <p className="text-xl font-bold text-white">Code. Create. Grow.</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Turning ideas into web experiences.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating code card */}
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-1 top-[12%] z-20 rounded-2xl border border-white/10 bg-[#111827]/90 p-3 shadow-xl backdrop-blur-xl sm:-left-8 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-400/10 p-2.5 text-cyan-300">
                <Code2 size={23} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Clean Code</p>
                <p className="text-xs text-slate-400">Built with purpose</p>
              </div>
            </div>
          </motion.div>

          {/* Floating terminal card */}
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -right-1 bottom-[20%] z-20 rounded-2xl border border-white/10 bg-[#111827]/95 p-3 shadow-xl backdrop-blur-xl sm:-right-7 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-violet-400/10 p-2.5 text-violet-300">
                <Terminal size={22} />
              </div>
              <div>
                <p className="font-mono text-sm font-semibold text-white">
                  &lt;developer /&gt;
                </p>
                <p className="text-xs text-slate-400">Always learning</p>
              </div>
            </div>
          </motion.div>

          {/* Floating braces */}
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : { rotate: [0, 8, -8, 0], y: [0, -5, 0] }
            }
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute right-4 top-[5%] z-20 rounded-2xl border border-blue-300/20 bg-blue-400/10 p-3 text-blue-300 backdrop-blur-md sm:right-8"
          >
            <Braces size={27} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={scrollToProjects}
        animate={reduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-cyan-300 md:flex"
        aria-label="Scroll to projects"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Explore my work
        </span>
        <ArrowDownRight size={19} className="-rotate-45" />
      </motion.button>
    </section>
  );
};
