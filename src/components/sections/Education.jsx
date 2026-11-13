
import { motion } from "framer-motion";

const education = [
  {
    number: "01",
    level: "Undergraduate",
    degree: "Bachelor of Engineering",
    field: "Computer Science & Engineering",
    institution: "HKBK College of Engineering",
    period: "2024 – 2028",
    result: "Currently Pursuing",
  },
  {
    number: "02",
    level: "Pre-University",
    degree: "PUC",
    field: "Science",
    institution: "New Baldwin International PU College",
    period: "2022 – 2024",
    result: "92%",
  },
  {
    number: "03",
    level: "Secondary Education",
    degree: "Class 10",
    field: "ICSE",
    institution: "Lowry Memorial Higher Secondary School",
    period: "2022",
    result: "83%",
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

export default function Education() {
  return (
    <section id="education" className="px-5 py-12 md:px-10 lg:px-16">
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
            08 / EDUCATION
          </p>

          <h2 className="text-3xl font-bold text-[#F7F2FC] md:text-5xl">
            My academic
            <span className="text-[#A78BFA]"> journey.</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#B4A9BF] md:text-base">
            My educational journey and the foundation behind my interest
            in computer science and technology.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative ml-3 space-y-4 border-l border-[#8B5CF6]/40 pl-6 md:ml-5 md:pl-9">
          {education.map((item) => (
            <motion.article
              key={item.number}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
              whileHover={{ x: 4 }}
              className="relative rounded-2xl border border-[#8B5CF6]/25 bg-[#101A32]/90 p-5 shadow-xl shadow-black/20 transition-all duration-300 hover:border-[#8B5CF6]/50 hover:shadow-[#7C3AED]/10 md:p-6"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[32px] top-7 h-3.5 w-3.5 rounded-full border-[3px] border-[#080D20] bg-[#A78BFA] shadow-[0_0_12px_#8B5CF6] transition-transform duration-300 hover:scale-125 md:-left-[45px]" />

              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-[#A78BFA]">
                    {item.level.toUpperCase()} · {item.number}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[#F7F2FC] md:text-2xl">
                    {item.degree}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#A78BFA]">
                    {item.field}
                  </p>

                  <p className="mt-3 text-sm text-[#D5CCDF]">
                    {item.institution}
                  </p>
                </div>

                <div className="flex shrink-0 flex-row items-center justify-between gap-3 sm:flex-col sm:items-end sm:justify-center">
                  <span className="rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-3 py-1.5 text-xs text-[#C4B5FD]">
                    {item.period}
                  </span>

                  <span className="text-sm font-bold text-[#F7F2FC]">
                    {item.result}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
