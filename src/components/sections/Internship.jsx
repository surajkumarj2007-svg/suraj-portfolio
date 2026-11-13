
import { motion } from "framer-motion";

export default function Internship() {
  return (
    <section id="internship" className="px-5 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] text-[#A78BFA]">
            05 / EXPERIENCE
          </p>

          <h2 className="text-3xl font-bold text-[#F7F2FC] md:text-5xl">
            Learning through
            <span className="text-[#A78BFA]"> experience.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#B4A9BF] md:text-base">
            Building practical knowledge through industry-oriented learning
            and hands-on experience.
          </p>
        </motion.div>

        {/* Internship Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -4 }}
          className="relative grid gap-5 overflow-hidden rounded-2xl border border-[#8B5CF6]/25 bg-[#101A32]/90 p-5 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-[#8B5CF6]/50 md:grid-cols-2 md:gap-7 md:p-7"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#8B5CF6]/10 blur-3xl" />

          {/* Internship Information */}
          <div className="relative flex flex-col justify-center">

            <span className="w-fit rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1 text-xs font-medium text-[#C4B5FD]">
              Completed · 6 Weeks
            </span>

            <h3 className="mt-4 text-2xl font-bold text-[#F7F2FC] md:text-3xl">
              Data Analytics with AI
            </h3>

            <p className="mt-2 text-sm font-medium text-[#A78BFA]">
              BharatCares · AICTE · IBM SkillsBuild
            </p>

            <p className="mt-3 text-sm leading-6 text-[#C9BED3]">
              Successfully completed the IBM SkillsBuild Data Analytics
              with AI Internship Program, gaining exposure to data analytics,
              artificial intelligence, and practical analytical concepts.
            </p>

            {/* Internship Details */}
            <div className="mt-4 space-y-2 text-sm text-[#D5CCDF]">
              <p>
                <span className="text-[#A78BFA]">Duration:</span>{" "}
                17 August – 30 September 2026
              </p>

              <p>
                <span className="text-[#A78BFA]">Mode:</span> Virtual
              </p>

              <p>
                <span className="text-[#A78BFA]">Certificate ID:</span>{" "}
                IBMACBHDAI3352
              </p>
            </div>

            {/* Skills */}
            <div className="mt-5">
              <p className="mb-2 text-xs font-semibold tracking-widest text-[#C4B5FD]">
                FOCUS AREAS
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Data Analytics",
                  "Artificial Intelligence",
                  "IBM SkillsBuild",
                  "AICTE",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#8B5CF6]/25 bg-[#8B5CF6]/10 px-3 py-1.5 text-xs text-[#D6C2EF] transition-all duration-300 hover:border-[#A78BFA]/60 hover:bg-[#8B5CF6]/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate Preview */}
          <div className="relative flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#080D20]/70 p-3 md:p-4">
            <p className="mb-3 text-xs font-semibold tracking-widest text-[#C4B5FD]">
              INTERNSHIP CERTIFICATE
            </p>

            <a
              href="/certificates/bharatcares-ibm-certificate.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full max-w-sm overflow-hidden rounded-lg border border-white/10 bg-white transition-all duration-300 hover:border-[#A78BFA]/60 hover:shadow-lg hover:shadow-[#8B5CF6]/10"
            >
              <img
                src="/certificates/bharatcares-ibm-certificate.jpeg"
                alt="BharatCares AICTE IBM SkillsBuild Data Analytics with AI Internship Certificate"
                loading="lazy"
                className="h-auto max-h-[340px] w-full object-contain"
              />
            </a>

            <a
              href="/certificates/bharatcares-ibm-certificate.jpeg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#6366F1] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7C3AED]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-[#7C3AED]/40"
            >
              View Certificate ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
