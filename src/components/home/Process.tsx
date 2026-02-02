import { MessageSquare, FileText, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Intake gesprek",
    description:
      "Kort kennismakingsgesprek om jouw wensen, huisstijl en doelen te bespreken. Duurt maximaal 30 minuten.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Content aanleveren",
    description:
      "Je levert je logo, teksten en foto's aan. Heb je nog niet alles? We starten met placeholders.",
  },
  {
    icon: Code,
    step: "03",
    title: "Website bouwen",
    description:
      "Wij bouwen je website op basis van bewezen templates. Je krijgt 2 revisierondes om feedback te geven.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Live binnen 48 uur",
    description:
      "Na goedkeuring gaat je site direct online. Hosting, e-mail en SSL zijn allemaal geregeld.",
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary"
          >
            Zo werkt het
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold md:text-4xl"
          >
            In 4 stappen online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Van eerste contact tot live website in recordtijd.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto max-w-5xl">
          {/* Connection Line (desktop) */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />

          <div className="grid gap-8 md:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative md:flex md:items-center md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`rounded-2xl border border-border bg-card p-6 shadow-card md:inline-block md:max-w-md ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div
                      className={`mb-4 flex items-center gap-3 ${
                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm font-semibold text-accent">Stap {step.step}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-card bg-primary md:block" />

                {/* Spacer for alignment */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note about content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-2xl rounded-xl bg-muted/50 p-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <strong>Tip:</strong> Heb je je content (logo, teksten, foto's) nog niet klaar? Geen 
            probleem! We starten met professionele placeholders en vullen de definitieve content 
            later aan. Zo hoef je niet te wachten.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
