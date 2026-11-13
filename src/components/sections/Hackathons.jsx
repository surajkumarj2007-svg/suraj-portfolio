
import { motion } from "framer-motion";

const hackathons = [
  {
    number: "01",
    name: "Aavishkar Pravah 2.0",
    type: "National-Level Hackathon",
    organizer: "Hackathon Event",
    description:
      "Participated in a national-level hackathon, exploring Generative AI and developing SakhiAI, a technology-driven solution focused on financial inclusion.",
    tags: ["Generative AI", "SakhiAI", "Innovation"],
    linkedin:
      "https://www.linkedin.com/posts/suraj-kumar-singh-b79723390_generativeai-hackathon-sakhiai-ugcPost-7465777450820513792-5_04/",
  },
  {
    number: "02",
    name: "NEXORA",
    type: "National-Level 36-Hour Hackathon",
    organizer: "HKBK College of Engineering",
    duration: "36 Hours",
    description:
      "Participated in a national-level hackathon focused on Generative AI and cybersecurity, collaborating to explore technology-driven solutions.",
    tags: ["Generative AI", "Cybersecurity", "Teamwork"],
    linkedin:
      "https://www.linkedin.com/posts/suraj-kumar-singh-b79723390_hackathon-generativeai-cybersecurity-ugcPost-7458779623946973184-IqL3/",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Hackathons() {
  return (
    <section id="hackathons" className="px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="mb-7"
        >
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-[#A78BFA]">
            07 / HACKATHONS
          </p>

          <h2 className="text-3xl font-bold text-[#F7F2FC] md:text-5xl">
            Building beyond
            <span className="text-[#A78BFA]"> the classroom.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#B4A9BF] md:text-base">
            Exploring ideas, collaborating with teams, and challenging
            myself through competitive innovation experiences.
          </p>
        </motion.div>

        {/* Hackathon Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {hackathons.map((event) => (
            <motion.article
              key={event.number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-[#8B5CF6]/25 bg-[#101A32]/90 p-5 shadow-xl shadow-black/20 transition-all duration-300 hover:border-[#8B5CF6]/50 hover:shadow-[#7C3AED]/10 md:p-6"
            >
              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8B5CF6]/10 blur-3xl transition-all duration-500 group-hover:bg-[#8B5CF6]/20" />

              <div className="relative">

                {/* Event Label */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#A78BFA]">
                    EVENT {event.number}
                  </span>

                  <span className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 text-xs text-[#C4B5FD]">
                    National Level
                  </span>
                </div>

                {/* Title */}
                <div className="my-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                    🏆
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#F7F2FC] md:text-2xl">
                      {event.name}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-[#A78BFA]">
                      {event.type}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-6 text-[#B4A9BF]">
                  {event.description}
                </p>

                {/* Details */}
                <div className="mt-4 space-y-1.5 text-xs text-[#D5CCDF]">
                  <p>
                    <span className="text-[#A78BFA]">Organizer:</span>{" "}
                    {event.organizer}
                  </p>

                  {event.duration && (
                    <p>
                      <span className="text-[#A78BFA]">Duration:</span>{" "}
                      {event.duration}
                    </p>
                  )}
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 px-3 py-1.5 text-xs text-[#C4B5FD] transition-all duration-300 hover:border-[#A78BFA]/60 hover:bg-[#8B5CF6]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* LinkedIn */}
                <a
                  href={event.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7C3AED]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#7C3AED]/40"
                >
                  View LinkedIn Post ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
