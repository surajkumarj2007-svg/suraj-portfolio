import Reveal from './Reveal'

export default function Section({ id, index, label, title, intro, children }) {
  return (
    <section id={id} className="border-t border-white/[0.07] py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mb-14 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.24em] text-zinc-500">
                {index}
                <span className="mx-2 text-zinc-700">/</span>
                {label}
              </p>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
                {title}
              </h2>
            </div>
            {intro ? (
              <p className="max-w-md text-base leading-relaxed text-zinc-400 md:col-span-5 md:justify-self-end">
                {intro}
              </p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  )
}
