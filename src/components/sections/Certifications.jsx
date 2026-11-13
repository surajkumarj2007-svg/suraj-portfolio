
import { motion } from "framer-motion";

const certifications = [
  {
    number: "01",
    title: "Generative AI for All",
    organization: "Infosys Springboard",
    date: "May 14, 2026",
    description:
      "Completed a course covering Generative AI concepts and foundational knowledge of artificial intelligence.",
    image: "/certificates/infosys-generative-ai.jpeg",
    type: "Course Completion Certificate",
  },
  {
    number: "02",
    title: "Digital Skills: Artificial Intelligence",
    organization: "Accenture",
    date: "August 11, 2026",
    description:
      "Completed Accenture's Digital Skills course, exploring artificial intelligence, its workplace applications, and the relationship between humans and AI.",
    image: "/certificates/accenture-certificate.jpeg",
    transcript: "/certificates/accenture-transcript.jpeg",
    type: "Certificate of Achievement",
    score: "93% Overall Score",
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

export default function Certifications() {
  return (
    <section id="certifications" className="px-5 py-12 md:px-10 lg:px-16">
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
            06 / CERTIFICATIONS
          </p>

          <h2 className="text-3xl font-bold text-[#F7F2FC] md:text-5xl">
            Learning never
            <span className="text-[#A78BFA]"> stops.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#B4A9BF] md:text-base">
            Certifications and learning milestones that reflect my
            interest in artificial intelligence and emerging technologies.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid items-start gap-5 lg:grid-cols-2">
          {certifications.map((certificate) => (
            <motion.article
              key={certificate.number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-2xl border border-[#8B5CF6]/25 bg-[#101A32]/90 shadow-xl shadow-black/20 transition-all duration-300 hover:border-[#8B5CF6]/50 hover:shadow-[#7C3AED]/10"
            >

              {/* Certificate Image */}
              <div className="relative flex h-[220px] items-center justify-center overflow-hidden bg-white p-3 sm:h-[260px]">
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full items-center justify-center"
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.organization} certificate`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 hover:scale-[1.03]"
                  />
                </a>

                <span className="absolute bottom-2 right-2 rounded-full bg-black/75 px-3 py-1 text-xs text-white">
                  Click to enlarge ↗
                </span>
              </div>

              {/* Certificate Details */}
              <div className="p-5 md:p-6">

                <p className="text-xs font-semibold tracking-[0.2em] text-[#A78BFA]">
                  CERTIFICATE {certificate.number}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#F7F2FC]">
                  {certificate.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#A78BFA]">
                  {certificate.organization}
                </p>

                <p className="mt-3 text-sm leading-6 text-[#B4A9BF]">
                  {certificate.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1.5 text-xs text-[#C4B5FD]">
                    {certificate.type}
                  </span>

                  <span className="text-xs text-[#B4A9BF]">
                    {certificate.date}
                  </span>
                </div>

                {certificate.score && (
                  <p className="mt-3 text-sm font-semibold text-[#C4B5FD]">
                    <span className="text-[#A78BFA]">Achievement:</span>{" "}
                    {certificate.score}
                  </p>
                )}

                {/* Actions */}
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7C3AED]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#7C3AED]/40"
                  >
                    View Certificate ↗
                  </a>

                  {certificate.transcript && (
                    <a
                      href={certificate.transcript}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/40 px-5 py-2.5 text-sm font-semibold text-[#C4B5FD] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8B5CF6]/15"
                    >
                      View Transcript ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
