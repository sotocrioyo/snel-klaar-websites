import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioProjects } from "@/data/portfolio";

export default function PortfolioTeaser() {
  const featuredProjects = portfolioProjects.slice(0, 6);

  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold md:text-4xl"
            >
              Recent werk
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/portfolio">
                Bekijk alle projecten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                <p className="text-sm text-muted-foreground">{project.description}</p>

                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.features.slice(0, 3).map((feature) => (
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
      </div>
    </section>
  );
}
