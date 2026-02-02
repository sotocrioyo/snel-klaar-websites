import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioProjects, industries } from "@/data/portfolio";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("alle");

  const filteredProjects =
    activeFilter === "alle"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.industrySlug === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-4xl font-bold md:text-5xl"
            >
              Portfolio
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Een selectie van websites die wij hebben gemaakt voor dienstverleners.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-card py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((industry) => (
              <button
                key={industry.slug}
                onClick={() => setActiveFilter(industry.slug)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === industry.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:shadow-card-hover"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.industry}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/80 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-sm font-medium text-background">
                    <ExternalLink className="h-4 w-4" />
                    Bekijk project
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">
                Geen projecten gevonden in deze categorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl bg-gradient-primary p-8 text-center md:p-12"
          >
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              Ook zo'n website laten maken?
            </h2>
            <p className="mb-6 text-white/80">
              Binnen 48 uur online voor een vaste prijs. Vraag vrijblijvend een offerte aan.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accent px-8 font-semibold text-accent-foreground hover:bg-accent-hover"
            >
              <Link to="/contact">Offerte aanvragen</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
