
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Instagram Insights",
    subtitle: "Creator Analytics Dashboard",
    description:
      "An interactive Power BI dashboard designed to analyze Instagram creator performance, audience behaviour, and content engagement through meaningful KPIs and visual insights.",
    features: [
      "Creator Performance KPIs",
      "Engagement Rate Analysis",
      "Audience Demographics",
      "Top Performing Posts",
      "Follower Growth Trends",
      "Content Type Comparison",
    ],
    technologies: [
      "Power BI",
      "DAX",
      "Data Analytics",
      "Data Visualization",
    ],
    images: [
      {
        src: "/projects/instagram-1.jpeg",
        alt: "Instagram creator analytics dashboard",
      },
      {
        src: "/projects/instagram-2.jpeg",
        alt: "Instagram audience and content insights dashboard",
      },
    ],
    github:
      "https://github.com/surajkumarj2007-svg/Instagram-Insights-Creator-Analytics",
  },
  {
    number: "02",
    title: "SakhiAI",
    subtitle: "Multilingual Financial Inclusion Platform",
    description:
      "A voice-first, offline-friendly digital platform designed to help women in rural India access financial education and use digital financial services with greater confidence.",
    features: [
      "AI Voice Assistant",
      "UPI & ATM Learning Simulator",
      "Loan Guidance",
      "Money Manager",
      "Voice-to-Form Assistant",
      "Offline Learning Mode",
    ],
    technologies: [
      "AI",
      "Voice Technology",
      "React",
      "Financial Inclusion",
    ],
    images: [
      {
        src: "/projects/sakhi-1.jpeg",
        alt: "SakhiAI platform homepage",
      },
      {
        src: "/projects/sakhi-2.jpeg",
        alt: "SakhiAI practical financial tools",
      },
    ],
    github: "https://github.com/surajkumarj2007-svg/sakhi-ai",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mb-8"
        >
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-[#B99AE8]">
            04 / SELECTED WORK
          </p>

          <h2 className="text-3xl font-bold text-[#F7F2FC] md:text-5xl">
            Projects that bring
            <span className="text-[#B99AE8]"> ideas to life.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#B4A9BF] md:text-base">
            A collection of projects where I explore data analytics,
            artificial intelligence, and technology-driven solutions.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#14213D]/95 via-[#101A32]/95 to-[#15132E]/95 shadow-xl shadow-black/20 transition-all duration-500 hover:border-cyan-300/30 hover:shadow-[0_12px_40px_rgba(0,180,255,0.10)]"
            >
              <div className="grid items-center gap-0 lg:grid-cols-[1.05fr_0.95fr]">

                {/* Screenshots */}
                <div className="grid grid-cols-2 gap-2 bg-black/20 p-3 md:p-4">
                  {project.images.map((image) => (
                    <motion.div
                      key={image.src}
                      whileHover={{ scale: 1.025 }}
                      transition={{ duration: 0.25 }}
                      className="group/image aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#080D20] transition-all duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_20px_rgba(0,229,255,0.12)]"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Project details */}
                <div className="flex flex-col p-5 md:p-6">

                  <span className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#9B72CF]">
                    PROJECT {project.number}
                  </span>

                  <h3 className="text-2xl font-bold text-[#F7F2FC]">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#B99AE8]">
                    {project.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#B4A9BF]">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-semibold tracking-widest text-[#D6C2EF]">
                      KEY FEATURES
                    </p>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-start gap-2 text-xs leading-5 text-[#D5CCDF]"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B99AE8]" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#9B72CF]/30 bg-[#9B72CF]/10 px-3 py-1 text-xs text-[#D6C2EF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub */}
                  <div className="mt-5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(0,229,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_0_25px_rgba(0,229,255,0.2)]"
                    >
                      View on GitHub
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
